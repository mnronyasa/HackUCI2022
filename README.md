# HackUCI2022

The inspiration behind UCI Major Picker was our team being partly comprised of former undeclared majors. We wanted to build an app that would 
give undeclared students some direction as to which major to change into or pick. 

Our app prompts the user to input keywords, and based on those keywords, our app will output a major that is most closely related to those keywords.

First, we crawled through every major found in the UCI Major Catalog and tokenized each major overview, and dumped each list of tokens into a JSON file. Every key corresponds to a specific major, with its value corresponding to the list of tokens related to that major.
We then built the app foundation by following the setup instructions found on the React site, while also adding specific components such as buttons, pages, and logos to make our app more functional and visually appealing.
