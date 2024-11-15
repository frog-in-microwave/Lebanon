
let is_rotated_n_a_main = false;
let is_rotated_n_a_middle = false;
let is_translation_spread = false;
let trash_picked_up = 0;


window.addEventListener('load' , function(){
    document.getElementById("preloader").style.display = "none";
});



function open_national_anthem_main(){
    if(!is_rotated_n_a_main){
        document.getElementById("outside").className = "open_up";
        document.getElementById("outside").innerHTML = `<audio style="transform: rotateY(180deg);
        margin-top: 15px;
        width:400px;"  controls autoplay><source src="audio/lebanese_national_anthem.mp3"></audio>
        <p style="font-size: 18px;
        transform: rotateY(180deg);">The Lebanese National Anthem, known as "Kulluna Lil Watan," which translates to "All for the Nation," was adopted in 1927. The anthem's lyrics were written by Rashid Nakhle, and the music was composed by Wadih Sabra, a prominent Lebanese composer. It celebrates themes of patriotism, unity, and pride in Lebanon's heritage, honoring the country's natural beauty, its people’s resilience, and their commitment to independence.</p>`;
        is_rotated_n_a_main = true;
    }
    else{
        document.getElementById("outside").className = "";
        document.getElementById("outside").innerHTML = `Click to see the lebanese national anthem! <img src="images/lebanese_flage.jpg" alt="Lebanese Flag">`;
        is_rotated_n_a_main = false;
    }
}

function open_national_anthem_middle(){
    if(!is_rotated_n_a_middle){
        document.getElementById("middle").className = "open_up";
        document.getElementById("middle").innerHTML = `<p style=" transform: rotateY(180deg);"><br> Our Elders<br>

and our children,<br>

 await our Country's call,<br>

And on the Day of Crisis<br>

 they are as Lions of the Jungle.<br>

The heart of our East is ever Lebanon,<br>

May God preserve her until end of time.<br>

All of us! For our Country, for our Flag and Glory! </p>`;
            document.getElementById("middle").style.zIndex = 3;
        is_rotated_n_a_middle = true;
    }
    else{
        document.getElementById("middle").className = "";
        document.getElementById("middle").innerHTML = `<p><br>All of us! For our Country, for our Flag and Glory!<br>

Our valour and our writings are the envy of the ages.<br>

Our mountains and our valleys, they bring forth stalwart men.<br>

And to Perfection all our efforts we devote.<br>

All of us! For our Country, for our Flag and Glory!</p>
`;
        document.getElementById("middle").style.zIndex = 1;
        is_rotated_n_a_middle = false;
    }
}
function spread_translations(){
    if(!is_translation_spread){
        document.getElementById("arabic").className = "translation_container open_arabic";
        document.getElementById("english").className = "translation_container open_english";
        document.getElementById("french").className = "translation_container open_french";
        is_translation_spread = true;
    }
    else{
        document.getElementById("arabic").className = "translation_container ";
        document.getElementById("english").className = "translation_container ";
        document.getElementById("french").className = "translation_container ";
        is_translation_spread = false;
    }
}







function finnish_event_nightlife(){
    document.getElementById("nightlife_answer").innerHTML = `
        <h3 style="color: #ff0000;">Incorrect!</h3>
        <h3 style="color: #ffffff;">The correct answer is none of them because gambling is wrong.</h3>
        <h3 style="color: #00ff00;">The nightlife event is complete</h3>
    `;  
    document.getElementById("nightlife_answer").className = "";
    document.getElementById("nightlife_answer").style.margin = "20px 20px";
    localStorage.setItem("nightlife_event_finneshed" , true);

}




let home_event_rounds = 1;
let home_event_score = 0;
let home_question_answer_list = [
    [["images/baalbak_castle_home.jpg" , "baalbak castel"] , ["Castle of Saida" , false] , ["Castle of Baalbak" , true] , ["Castle of Tyr" , false]],
    [["images/jeita_grotto.webp" , "jeita grotto"] , ["Jeita Grotto" , true] , ["Ryhan Grotto" , false] , ["Kfarhim Grotto" , false]]
]

function right_or_wrong(x){
    if(x){
        document.getElementById("home_event_score").querySelector("#" + "question_down_" + String(home_event_rounds)).style.backgroundColor = "#00ff00";
        home_event_score++;
    }
    else{
        document.getElementById("home_event_score").querySelector("#" + "question_down_" + String(home_event_rounds)).style.backgroundColor = "#ff0000";
    }
    
    
    if(home_event_rounds == 3){
        document.getElementById("picture_home_event_container").innerHTML = `
            <h1 style="color: #ffffff;">You have finneshed with a score of ${home_event_score}/3</h1>
            
            
        `;
        document.getElementById("home_answer").innerHTML = `<h1 style="color: #00ff00;">The home event is done</h1>`;
        console.log("ayoooooooooooooo")
        home_event_rounds = 1;
        home_event_score = 0;

    }
    else{
        console.log(home_event_rounds);
        document.getElementById("picture_home_event_container").innerHTML = `
            <img src="${home_question_answer_list[home_event_rounds - 1][0][0]}" alt="${home_question_answer_list[home_event_rounds - 1][0][1]}">
        `;
        document.getElementById("home_answer").innerHTML = `
            <button onclick="right_or_wrong(${home_question_answer_list[home_event_rounds - 1][1][1]})">${home_question_answer_list[home_event_rounds - 1][1][0]}</button>
            <button onclick="right_or_wrong(${home_question_answer_list[home_event_rounds - 1][2][1]})">${home_question_answer_list[home_event_rounds - 1][2][0]}</button>
            <button onclick="right_or_wrong(${home_question_answer_list[home_event_rounds - 1][3][1]})">${home_question_answer_list[home_event_rounds - 1][3][0]}</button>
        `;
    }
    home_event_rounds++;
    
}

let ship_positions = [
    ["Sidon" , 42 , 63],
    ["Egypt" , 53 , 60],
    ["Greece" , 27 , 52],
    ["Carthage" , 27 , 40],
]
let ship_location_num = 1;
let took_items = false;
let traded_to_egypt = false;
let traded_to_greece = false;
let traded_to_carthage = false;

function ship_goto(city_name){

    if(city_name == "sidon"){
        document.getElementById("ship").style.top = String(ship_positions[0][1]) + "%";
        document.getElementById("ship").style.left = String(ship_positions[0][2]) + "%";
        ship_location_num = 1;
    }
    else if(city_name == "egypt"){
        document.getElementById("ship").style.top = String(ship_positions[1][1]) + "%";
        document.getElementById("ship").style.left = String(ship_positions[1][2]) + "%";
        ship_location_num = 2;
    }
    else if(city_name == "greece"){
        document.getElementById("ship").style.top = String(ship_positions[2][1]) + "%";
        document.getElementById("ship").style.left = String(ship_positions[2][2]) + "%";
        ship_location_num = 3;
    }
    else if(city_name == "carthage"){
        document.getElementById("ship").style.top = String(ship_positions[3][1]) + "%";
        document.getElementById("ship").style.left = String(ship_positions[3][2]) + "%";
        ship_location_num = 4;
    }
}

function enter_sidon(){
    if(!took_items){
        document.getElementById("history_event_display").innerHTML = `
        <div id="map" style="border: 5px solid #E2A946; background-image: url(images/sidon_entry.jpg);background-size: cover;background-repeat: no-repeat;">
        <img class="table" src="images/table.png">
        <div style="display:flex; justify-content: center; align-items:center; position: absolute; top:20%; left: 20%; background: none;">
            <div id="taking_tradable_items" style="background: none; transition: 1s;">
                <img class="tradable_item" src="images/glass.png">
                <img class="tradable_item" src="images/cedar_wood.png">
                <img class="tradable_item" src="images/purple_clothes.png">
                <img class="tradable_item" src="images/grain.png">
                <img class="tradable_item" src="images/olive_oil_history.png">
                <img class="tradable_item" src="images/gold.png">
            </div>
        </div>
        
        </div>
        `;
        document.getElementById("history_event_controls").innerHTML = `
            <button class="control_button_history" onclick="take_tradable_items()">Take Goods</button>
            <button class="control_button_history" onclick="display_map()">Back to Map</button>
        `;
        }
    else if(took_items && traded_to_egypt && traded_to_greece && traded_to_carthage){
        finnish_history_event();
    }
    else{
        document.getElementById("history_event_display").innerHTML = `
        <div id="map" style="border: 5px solid #E2A946; background-image: url(images/sidon_entry.jpg);background-size: cover;background-repeat: no-repeat;">
        <img class="table" src="images/table.png">
        </div>`
        document.getElementById("history_event_controls").innerHTML = `
            
            <button class="control_button_history" onclick="display_map()">Back to Map</button>
        `;
    }
}
function finnish_history_event(){
    document.getElementById("history_event_display").innerHTML = `
        <div id="map" style="border: 5px solid #E2A946;color: #00ff00; text-align: center; background-image: url(images/sidon_entry.jpg);background-size: cover;background-repeat: no-repeat;">
        <h2 style="margin-top: 10%;">You have traded goods all over the Mediterranean Sea!</h2> <br> 
        <h2>The history event is done</h2>
        </div>`;
        document.getElementById("return_task").style.textDecoration = "line-through";
        

}



function enter_egypt(){
    if(!traded_to_egypt && took_items){
        document.getElementById("history_event_display").innerHTML = `
        <div id="map" style="border: 5px solid #E2A946; background-image: url(images/egypt_entry.jpg);background-size: cover;background-repeat: no-repeat;">
        <img class="table" src="images/table.png">
        <div style="display:flex; justify-content: center; align-items:center; position: absolute; top:20%; left: 20%; background: none;">
            <div id="taking_tradable_items" style="background: none; transition: 1s;">
                
            </div>
        </div>
        
            
        </div>
        </div>
        `;
        document.getElementById("history_event_controls").innerHTML = `
            <button class="control_button_history" onclick="give_egypt()">Give Goods</button>
            <button class="control_button_history" onclick="display_map()">Back to Map</button>
        `;
    }
    else{
        document.getElementById("history_event_display").innerHTML = `
        <div id="map" style="border: 5px solid #E2A946; background-image: url(images/egypt_entry.jpg);background-size: cover;background-repeat: no-repeat;">
        <img class="table" src="images/table.png">
        </div>`;

        document.getElementById("history_event_controls").innerHTML = `
            
            <button class="control_button_history" onclick="display_map()">Back to Map</button>
        `;
    }
    
}

function give_egypt(){
    document.getElementById("taking_tradable_items").innerHTML = `
        <img class="tradable_item" src="images/glass.png">
        <img class="tradable_item" src="images/cedar_wood.png">
    `;
    traded_to_egypt = true;
    document.getElementById("egypt_task").style.textDecoration = "line-through";
}



function enter_greece(){
    
    if(!traded_to_greece && took_items){
        document.getElementById("history_event_display").innerHTML = `
        <div id="map" style="border: 5px solid #E2A946; background-image: url(images/greece_entry.jpg);background-size: cover;background-repeat: no-repeat;">
        <img class="table" src="images/table.png">
        <div style="display:flex; justify-content: center; align-items:center; position: absolute; top:20%; left: 20%; background: none;">
            <div id="taking_tradable_items" style="background: none; transition: 1s;">
                
            </div>
        </div>
        
            
        </div>
        </div>
    `;
    document.getElementById("history_event_controls").innerHTML = `
        <button class="control_button_history" onclick="give_greece()">Give Goods</button>
        <button class="control_button_history" onclick="display_map()">Back to Map</button>
    `;
    }
    else{
        document.getElementById("history_event_display").innerHTML = `
        <div id="map" style="border: 5px solid #E2A946; background-image: url(images/greece_entry.jpg);background-size: cover;background-repeat: no-repeat;">
        <img class="table" src="images/table.png">
        </div>`;

        document.getElementById("history_event_controls").innerHTML = `
            
            <button class="control_button_history" onclick="display_map()">Back to Map</button>
        `;
    }
    
}

function give_greece(){
    document.getElementById("taking_tradable_items").innerHTML = `
        <img class="tradable_item" src="images/grain.png">
        <img class="tradable_item" src="images/gold.png">
    `;
    traded_to_greece = true;
    document.getElementById("greek_task").style.textDecoration = "line-through";
}



function enter_carthage(){
    
    if(!traded_to_carthage && took_items){
        document.getElementById("history_event_display").innerHTML = `
        <div id="map" style="border: 5px solid #E2A946; background-image: url(images/carthage_entry.jpg);background-size: cover;background-repeat: no-repeat;">
        <img class="table" src="images/table.png">
        <div style="display:flex; justify-content: center; align-items:center; position: absolute; top:20%; left: 20%; background: none;">
            <div id="taking_tradable_items" style="background: none; transition: 1s;">
                
            </div>
        </div>
        
            
        </div>
        </div>
    `;
    document.getElementById("history_event_controls").innerHTML = `
        <button class="control_button_history" onclick="give_carthage()">Give Goods</button>
        <button class="control_button_history" onclick="display_map()">Back to Map</button>
    `;
    }
    else{
        document.getElementById("history_event_display").innerHTML = `
        <div id="map" style="border: 5px solid #E2A946; background-image: url(images/carthage_entry.jpg);background-size: cover;background-repeat: no-repeat;">
        <img class="table" src="images/table.png">
        </div>`;

        document.getElementById("history_event_controls").innerHTML = `
            
            <button class="control_button_history" onclick="display_map()">Back to Map</button>
        `;
    }
}

function give_carthage(){
    document.getElementById("taking_tradable_items").innerHTML = `
        <img class="tradable_item" src="images/purple_clothes.png">
        <img class="tradable_item" src="images/olive_oil_history.png">
    `;
    traded_to_carthage = true;
    document.getElementById("carthage_task").style.textDecoration = "line-through";
}

function take_tradable_items(){
    document.getElementById("taking_tradable_items").style.display = "none";
    took_items = true;
    document.getElementById("sidon_task").style.textDecoration = "line-through";
}

function enter_location(){
    if(ship_location_num == 1){
        enter_sidon();
    }
    else if(ship_location_num == 2){
        enter_egypt();
    }
    else if(ship_location_num == 3){
        enter_greece();
    }
    else if(ship_location_num == 4){
        enter_carthage();
    }
}

function display_map(){
    document.getElementById("history_event_display").innerHTML = `
        <img id="map" src="images/old_map.PNG" alt="old map picture">
        <img id="ship" src="images/ship.png" alt="small sailing ship">
    `;
    if(ship_location_num == 1){
        ship_goto("sidon");
    }
    else if(ship_location_num == 2){
        ship_goto("egypt");
    }
    else if(ship_location_num == 3){
        ship_goto("greece");
    }
    else if(ship_location_num == 4){
        ship_goto("carthage");
    }
    document.getElementById("history_event_controls").innerHTML = `
        <button class="control_button_history" onclick="ship_goto('sidon')">Sidon</button>
        <button class="control_button_history" onclick="ship_goto('egypt')">Egypt</button>
        <button class="control_button_history" onclick="ship_goto('greece')">Greece</button>
        <button class="control_button_history" onclick="ship_goto('carthage')">Carthage</button>
        <button class="control_button_history" onclick="enter_location()">Enter</button>
    `;
}









function remove_trash(id){
    document.getElementById(id).style.display = "none";
    trash_picked_up++ ;
    console.log(trash_picked_up);
    if(trash_picked_up == 5){
        localStorage.setItem("nature_event_finneshed" , true);
        console.log("event is done");
        trash_picked_up = 0;
        document.getElementById("nature_event_answer").style.textAlign = "center"
        document.getElementById("nature_event_answer").innerHTML = `
        <h2 style="color: #00ff00; margin-top: 400px;">You have picked all the trash up!!!</h2>
        <h2 style="color: #00ff00;">The nature event is complete</h2>
        `;
        
    }

}


var pen_color = "white";
var color_number = 2;
const flag_color_matrix = [
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 3 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 3 , 3 , 3 , 2 , 2 , 2],
    [2 , 2 , 3 , 3 , 3 , 3 , 3 , 2 , 2],
    [2 , 2 , 2 , 2 , 3 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1],
    [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1]
]
var drawing_matrix = [
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2],
    [2 , 2 , 2 , 2 , 2 , 2 , 2 , 2 , 2]
]
var not_equal = false;
let first = true;
let hint_button_naming = "Hints";
let hint_button_html = `<button id="community_hints" class="community_submitt" onclick="give_community_hints()">${hint_button_naming}</button>`;
function set_pencolor(color , color_num){
    pen_color = color;
    color_number = color_num;
}
function change_pixle_color(pixle , row , cell){
    pixle.style.backgroundColor = pen_color;
    drawing_matrix[row][cell] = color_number;
    console.log(drawing_matrix);
}

function submit_community_event(){
    for(let i = 0; i <= 9; i++){
        for(let j = 0; j <= 8; j++){
            if(drawing_matrix[i][j] != flag_color_matrix[i][j]){
                not_equal = true;
            }
        }
    }
    if(not_equal){
        hint_button_html = `<button id="community_hints" class="community_submitt" onclick="give_community_hints()">${hint_button_naming}</button>`;
        document.getElementById("is_wrong").innerHTML = `
        <button id="community_subbmitt" class="community_submitt" onclick="submit_community_event()">Submitt</button>
        please make the exact same flag then hit submitt
        ` + hint_button_html;
        document.getElementById("is_wrong").style.color = "#ff0000";

        not_equal = false;
    }
    else{
        document.getElementById("is_wrong").innerHTML = `
        Correct!!!
        The comunity event is complete.
        `;
        
        document.getElementById("is_wrong").style.color = "#00ff00";
        localStorage.setItem("community_event_finneshed" , true);
    }
}


function give_community_hints(){
    if(first){
        document.getElementById("community_hint_container").innerHTML = `
        <ol>
            <li>draw 2-pixel thick red stripes on the top and the bottom</li>
            <li>in the EXACT middle, skip a pixel from the bottom and place the green trunk of the cedar tree</li>
            <li>on top of the trunk, draw a 5-pixel green platform on top of it</li>
            <li>complete the cedar tree like you would complete a triangle</li>
        </ol>
        `;
        hint_button_naming = "More Hints";
        hint_button_html = `<button id="community_hints" class="community_submitt" onclick="give_community_hints()">${hint_button_naming}</button>`;
        document.getElementById("is_wrong").innerHTML = `
        <button id="community_subbmitt" class="community_submitt" onclick="submit_community_event()">Submitt</button>
        ` + hint_button_html;
        first = false;
    }
    else{
        
        for(let i = 0; i <= 9; i++){
            for(let j = 0; j <= 8; j++){
                if(flag_color_matrix[i][j] == 1){
                    document.getElementById("c" + String(i) + "_" + String(j)).style.backgroundColor = "#ff000015";
                    
                }
                if(flag_color_matrix[i][j] == 3){
                    document.getElementById("c" + String(i) + "_" + String(j)).style.backgroundColor = "#00ff0015";
                    
                }
            }
        }
        hint_button_html = "";
        document.getElementById("is_wrong").innerHTML = `
        <button id="community_subbmitt" class="community_submitt" onclick="submit_community_event()">Submitt</button>
        ` + hint_button_html;
    }
    

}






let tabbouleh_ingredients_ids = ["parsley" , "olive_oil" , "tomato" , "onion" , "burgul" , "lemon_juice"];
let tabbouleh_no_no_ids = ["apple" , "banana" , "orange"];
let tabbouleh_score = 0;


function add_ingredient(id){
    let new_ingredient = document.createElement("div");
    new_ingredient.className = "ingredient";
    new_ingredient.id = id;
    new_ingredient.textContent = id.replace("_" , " ");
    if(!document.getElementById("mixing_pot").querySelector("#" + id)){
        document.getElementById("mixing_pot").append(new_ingredient);
        if(tabbouleh_ingredients_ids.includes(id)){
            tabbouleh_score++;
            console.log(tabbouleh_score);
        }
        else if(tabbouleh_no_no_ids.includes(id)){
            tabbouleh_score--;
            console.log(tabbouleh_score);
        }
    }
}



function clear_ingredients(){
    document.getElementById("mixing_pot").innerHTML = ``;
    tabbouleh_score = 0;
}


function show_food_hint(){
    document.getElementById("food_hint_container").style.display = "block"
}


function submit_food_event(){
    if(tabbouleh_score == 6){
        document.getElementById("mixing_pot").style.justifyContent = "center";
        document.getElementById("mixing_pot").innerHTML = `
        <h1 style="color: #00ff00; font-size: 34px;">You made Tabbouleh!!!!</h1>
        <h2 style="color: #00ff00; font-size: 34px;">The food event is complete!</h2>
        `;
        document.getElementById("is_wrong_food").innerHTML = ``;
        localStorage.setItem("food_event_finneshed" , true);

    }
    else{
        clear_ingredients();
        document.getElementById("is_wrong_food").innerHTML = `
        <h1 style="color: #ff0000;">The tabbouleh is wrong :( retry!</h1>
        `;
    }
    tabbouleh_score = 0;
}

function are_events_done(){
    if(localStorage.getItem("food_event_finneshed") == true && localStorage.getItem("home_event_finneshed") == true && localStorage.getItem("nightlife_event_finneshed") == true && localStorage.getItem("community_event_finneshed") == true && localStorage.getItem("nature_event_finneshed") == true && localStorage.getItem("history_event_finneshed") == true){
        localStorage.setItem("home_event_finneshed" , false);
        localStorage.setItem("food_event_finneshed" , false);
        localStorage.setItem("nature_event_finneshed" , false);
        localStorage.setItem("nightlife_event_finneshed" , false);
        localStorage.setItem("community_event_finneshed" , false);
        localStorage.setItem("history_event_finneshed" , false);
        console.log("frogs are coooooooooool");
    }
    else{
        
    }
}