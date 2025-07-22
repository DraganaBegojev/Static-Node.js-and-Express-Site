# Static Node.js and Express Site
FSJS-6

# 🖋 Font Customization
To improve the visual clarity and give the site a modern, minimalist look, I customized the fonts using Google Fonts.

🔗 Fonts Included:

    link(rel="stylesheet", href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap")
    link(rel="stylesheet", href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap")

🎨 Applied Changes:
 - set all h4, h5, and p elements to use Inter
 - updated .projects-box h5 to use Fira Code to mimic a code-style font
 - changed the font for elements in the sidebar, ul lists under skills and technologies, to also use Fira Code


# 🎨 Visual Enhancements

* Project box shadow

    To add a subtle depth effect and improve the visual appeal of the project thumbnails, I updated the box-shadow property on the .cell img elements.

    CSS Update:
    <pre> ```CSS 
    .cell img { 
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
    } 
    ``` </pre>

* Project thumbnails hover effect

    Implemented a smooth hover effect to slightly enlarge project thumbnails and enhance shadow for a "pop-out" feel:
    <pre> ```CSS 
    .cell img { 
        transition: transform 0.3s ease, box-shadow 0.3s ease; 
        } 
    .cell img:hover { 
        transform: scale(1.03); 
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15); 
        } 
        ``` </pre>

* Buttons

    Enhanced .btn-link buttons with a modern and tactile feel:
    - Rounded corners using border-radius: 4px;
    - Smooth animations using transition: all 0.2s ease;
    - Initial box shadow for elevation: box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    - On hover:
     <pre> ```CSS 
     background-color: rgb(66, 119, 77); 
     transform: translateY(2px); 
     box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15); 
     ``` </pre>

* Navigation Styling

    Added custom hover effects for the navigation and sidebar links to improve interactivity and visual feedback:
    <pre> ```CSS 
    nav a:hover { 
        color: #000; 
        border-bottom: 2px solid #000; 
        } 
    .sidebar a:hover { 
        color: #fefefe; 
        border-bottom: 2px solid #fefefe; 
        } 
    ``` </pre>