const homeController = (req,res) => {
  res.render("index.html",{})
} 

const aboutController = (req,res) => {
  res.render("features/about.html",{})
} 


const contactController = (req,res) => {
  res.render("features/contact.html",{})
} 
module.exports = {
  HOME : homeController,
  ABOUT : aboutController,
  CONTACT : contactController
}