const nodemailer = require("nodemailer");

module.exports.sendMail=async (req,res,user)=>{
    const transport = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        service:"Gmail",
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.USERPASS,
        },
    });

    const info ={
        from: '"Social.io 👻" <mrsourabh05@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: `welcome ${req.body.username}`, // Subject line
        text: `${req.body.username} You are now subscribed to our page.....`, // plain text body
//         html: `<!DOCTYPE html>
// <html>
//   <head>
//     <title><%= title %></title>
//     <!-- <link rel='stylesheet' href='/stylesheets/style.css' /> -->
//     <script src="https://cdn.tailwindcss.com"></script>
//      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />

//   </head>

//   <body class="bg-blue-200 m-10">
// <h1 class="text-center text-5xl ">Subscribe to our page <i class="ri-bell-line text-red-500"></i> </h1>
//     <form action="/subscribe" method="post" class="mt-10">
     
//       <input type="text" placeholder="Enter username" class="bg-blue-300 px-2 py-1 text-2xl rounded outline-none mb-2" name="username">
//       <br>
//       <input type="email" placeholder="example@ex.com" class="bg-blue-300 px-2 py-1 text-2xl rounded outline-none mb-2" name="email">
//       <br>
//       <input type="contact" placeholder="contact info" class="bg-blue-300 px-2 py-1 text-2xl rounded outline-none mb-2" name="contact"> 
//       <br>
// <button class="bg-red-600 px-2 px-3 rounded hover:bg-red-700 text-xl">Subscribe <i class="ri-bell-line text-white"></i></button>
//     </form>
  
//   </body>
// </html>
// `
    };
    transport.sendMail(info,(err,info)=>{
        if(err) return res.send(err)
      console.log("mail sent");
    return res.send("Page subscribed Email sent please check your inbox")
    })
}