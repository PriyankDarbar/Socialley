import React from 'react';
import Acknowledgement from './Pages/Acknowledgement';
import Acknowledgement_Payment from './Pages/Acknowledgement_Payment';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Choose_Membership1 from './Pages/Choose_Membership1';
import Confirm_Purchase from './Pages/Confirm_Purchase';
import Choose_Membership2 from './Pages/Choose_Membership2';
import Community_Admin_Open from './Pages/Community_Admin_Open';
import Community_Details from './Pages/Community_Details';
import Yoga from './Pages/Yoga';
import Community_Empty from './Pages/Community_Empty';
import Edit_Post from './Pages/Edit_Post';
import Email_Change_Password from './Pages/Email_Change_Password';
import Set_New_Password from './Pages/Set_New_Password';
import Email_Registration_Confiramation from './Pages/Email_Registration_Confiramation';
import User_Profile from './Pages/User_Profile';
import Email_User_Joined_Community from './Pages/Email_User_Joined_Community';
import Event from './Pages/Event';
import Event_Passed from './Pages/Event_Passed';
import Review_Page from './Pages/Review_Page';
import Health_Wellness_Preferences from './Pages/Health_Wellness_Preferences';
import Landing from './Pages/Landing';
import Paypal_Payment from './Pages/Paypal_Payment';
import Post_Details from './Pages/Post_Details';
import Post_Like_Rate from './Pages/Post_Like_Rate';
import Subscription_Type from './Pages/Subscription_Type';
import Subscription_Type2 from './Pages/Subscription_Type2';
import Topics_Posts_Details from './Pages/Topics_Posts_Details';
import Create_Event_Inside_Community from './Pages/Create_Event_Inside_Community';
import Create_Post_Inside_Community from './Pages/Create_Post_Inside_Community';
import YogaEvents from './Pages/YogaEvents';
import Edit_User_Profile from './Pages/Edit_User_Profile';

const Markup = () => {
  return (
    <Routes>

      <Route path='/home' element={<Home />} />
      <Route path='/acknowledgement' element={<Acknowledgement />} />
      <Route path="/acknowledgement-payment" element={<Acknowledgement_Payment />} />
      <Route path="/choose-membership1" element={<Choose_Membership1 />} />
      <Route path='/confirm-purchase' element={<Confirm_Purchase />} />
      <Route path='/choose-membership2' element={<Choose_Membership2 />} />
      <Route path='/community-admin-open' element={<Community_Admin_Open />} />
      <Route path='/community-details' element={<Community_Details />} />
      <Route path='/yoga' element={<Yoga />} />
      <Route path='/yoga-events' element={<YogaEvents />} />
      <Route path='/community-empty' element={<Community_Empty />} />
      <Route path='/edit-user-profile' element={<Edit_User_Profile />} />
      <Route path='/edit-post' element={<Edit_Post />} />
      <Route path='/email-change-pwd' element={<Email_Change_Password />} />
      <Route path='/set-new-password' element={<Set_New_Password />} />
      <Route path='/email-registration-confiramation' element={<Email_Registration_Confiramation />} />
      <Route path='/user-profile' element={<User_Profile />} />
      <Route path='/email-user-joined-community' element={<Email_User_Joined_Community />} />
      <Route path='/event' element={<Event />} />
      <Route path='/event-passed' element={<Event_Passed />} />
      <Route path='/health-wellness-preferences' element={<Health_Wellness_Preferences />} />
      <Route path='/review-page' element={<Review_Page />} />
      <Route path='/' element={<Landing />} />
      <Route path='/paypal' element={<Paypal_Payment />} />
      <Route path='/post-details' element={<Post_Details />} />
      <Route path='/post-like-rate' element={<Post_Like_Rate />} />
      <Route path='/subscription-type' element={<Subscription_Type />} />
      <Route path='/subscription-type2' element={<Subscription_Type2 />} />
      <Route path='/topics-posts-details' element={<Topics_Posts_Details />} />
      <Route path='/create-event-inside-community' element={<Create_Event_Inside_Community />} />
      <Route path='/create-post-inside-community' element={<Create_Post_Inside_Community />} />
    </Routes>
  )
}

export default Markup;