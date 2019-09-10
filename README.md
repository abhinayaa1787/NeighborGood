# NeighborGood

https://neighborgood1.herokuapp.com

Application where you would have a neighborhood associated with their account. We will have a user login function, a classifieds section for sales, services, etc. We will have a section for upcoming neighborhood events such as: HOA meetings, Block parties, and yard sales. The idea is to have real world neighborhood would register for this site.

![Screenshot](/client/public/images/mainpage.png)
 
#### Technologies,Package used

* Create-React pp
* Express
* Mongoose
* Node
* Axios
* Passport
* React- leaflet
* React- moment
* React-Dom
* APIs- MapQuest Geocoder, EventBrite

#### How this works

This react app has multiple pages powered by the react components.

#### * Register Page
The register page allows the user to register and be a part of this app. 

![Screenshot](/client/public/images/register.png)

#### * Login page

If it is an already registered user, then login page can be used to login and check events/listings

![Screenshot](/client/public/images/login.png)

#### * User portfolio page
Once the user registers, the other pages are accessible. The user can see their profile, post events/classified, check neighbors info and the events/classifieds posted by them

![Screenshot](/client/public/images/userportfolio.png)

* Neighbors page

    In the user portfolio page, the neighbors link will open a new page where all the registered users and their info are listed

![Screenshot](/client/public/images/neighbors.png)

* Modals with events, classifieds posted by logged in user

    The events/classifieds link opens modals with info about the evets/listings posted by the user who is logged in.

![Screenshot](/client/public/images/modals.png)


#### Events page

This page has three tabs

* Events posted by neighbors
    - This tab has events that are posted by neighbors

![Screenshot](/client/public/images/neighborevents.png)

* Local events
    - This tab has  the local events populated from EventBrite API using the user's address

![Screenshot](/client/public/images/localevents.png)


* Saved events
    - This tab has all the events that are saved by the user, both events posted by neighbors and local events

![Screenshot](/client/public/images/savedevents.png)


#### Classifieds page

This has the listings that are posted by the neighbors

![Screenshot](/client/public/images/classifieds.png)


#### Contact us page

This allows the user to contact the customer support with any issues with the page

![Screenshot](/client/public/images/contactus.png)


#### Future enhancements will be
* Limiting user access based on address
* Neighbrhood map
* Password encryption