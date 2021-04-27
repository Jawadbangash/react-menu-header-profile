Every effort has been made to keep the package light as possible with least ammount of
outside libraries so feature is fast and does not affect the speed of your application.

Next feature relases: 

Profile menu.

How to use:

Insert into top componnent of your app and should be the first one of your compenent tree. 

Pass an array of objects called arrayMenu for menu items to the component as props

Each menu item should use key value pairs as such

arrayMenu : {
    name: (name of the menu item), 
    callBack: (funcation to trigger on click), 
    image: (under construction, optional image that will be fixed to the left of text)
}

This is a new component and there are new features being added. Existing features have been tested.