                                      WORLD CLOCK APP
![world-clock-app](https://github.com/Kamagalhaes92/world-clock/assets/112024953/c5875a33-0f61-45fe-8bd9-b0faffc0610e)

Experience a dynamic world clock website featuring a responsive digital and analog clock that seamlessly displays the current time of your location. The user-friendly dashboard showcases time in four distinct locations, each accompanied by stunning background visuals upon hovering. Users can easily select from a curated list of nine cities using a dropdown menu, revealing additional information about the chosen city. As a final touch, enjoy an engaging animation depicting a moving train, symbolizing the relentless passage of time.

**Design Information:**
**Color Scheme:**
Embrace a minimalistic color scheme to enhance the user experience. Utilize calming and neutral tones, such as soft grays, whites, and perhaps a touch of accent color for interactive elements.

**Responsive Design:**
The webpage boasts a fully responsive design, ensuring a consistent and enjoyable experience across various devices and screen sizes. Whether accessed from a desktop, tablet, or smartphone, users can seamlessly navigate and interact with the world clock app.

**User-Friendly Interface:**
The interface is designed for simplicity and ease of use. 

**Behind the Curtains: Implementation Details**
1. Analog Clock Functionality (**displayTime Function**)
The **displayTime** function takes a time zone as an argument and uses the Moment.js library to calculate the hours, minutes, and seconds for that specific time zone.
Rotations for the hour, minute, and second hands of the analog clock are calculated based on the current time.
The rotation angles are then applied to the corresponding elements in the HTML, creating a dynamic analog clock display.
2. City Selection and Information (**showSelectedCountry Function**)
The **showSelectedCountry** function is triggered on city selection from the dropdown menu.
It updates the information displayed on the page, including the current time, date, day of the week, and region information.
The analog clock is also updated based on the selected city's time zone, and a setInterval is set to keep the clock ticking.
3. Updating Time for Specific Cities (**updateTime Function**)
The **updateTime** function is responsible for updating the time information for specific cities (Portland, Sao Paulo, London, Tokyo).
Elements for date, hour, minute, and seconds for each city are selected, and Moment.js is used to format and display the respective information.
4. Detailed City Information (**showCityInfo Function**)
The showCityInfo function is triggered when a user clicks on a city, providing detailed information about that city.
It dynamically updates the content in the cityInfoText element based on the selected city.
5. Go Back Functionality (goBack Function)
The goBack function is associated with the "Go Back" button, allowing users to return to the city selection view from the detailed city information view.
6. Initial Setup and Event Listeners
The script initiates the initial display of the local time and sets up event listeners for city selection and the "Go Back" button.
The **DOMContentLoaded** event triggers the initial display of the selected city's time.

**Tech Stack:**
  
HTML5: Structuring the content for a clean and semantic layout.
CSS3: Styling elements with a focus on a minimalist design and responsiveness.
JavaScript: Adding dynamic functionality and interactivity to the app.
Moment.js: Ensuring accurate and efficient handling of time-related data.

Check out the live app: [https://aroundtheworld-worldclock.netlify.app/]

Explore time in a new light with AroundTheWorld World Clock – where simplicity meets functionality!

