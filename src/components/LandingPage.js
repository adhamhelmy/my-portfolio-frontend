import  React from "react"
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"



function LandingPage(props) {

    let secNum = 3;
    
    document.addEventListener('scroll', function() {
        for(let i = 1; i <= secNum; i++)
        {
          let activeSection = document.getElementById('section'+ i);
          if((activeSection.getBoundingClientRect().top < 400 && activeSection.getBoundingClientRect().bottom > 450))
          {
            console.log(document.getElementById('section'+ i));
            document.getElementById('section'+ i).classNameList.add('stateOn');
           
          }
          else
          {
            document.getElementById('section'+ i).classNameList.remove('stateOn');
          }
        }
    });
    
    
    // function addNavigationMenu()
    // {
    //     for(let i = 1; i <= secNum; i++)
    //     {
    //       addNavElement(i);
    //     }
    // }

    // function addNavElement(navNum){
    //     let navBar = document.getElementById('navbar__list');
    //     let nav = document.createElement("li");
    //     nav.setAttribute('id','nav' + navNum);
    //     nav.setAttribute('data-nav',"data-nav" + navNum);
    //     nav.appendChild(document.createTextNode("section " + navNum));
    //     navBar.appendChild(nav);
    //     document.getElementById('nav' + navNum).addEventListener('click', function () {
    //       document.getElementById('section' + navNum).scrollIntoView({behavior:"smooth"});
    //     });
    // }
    //addNavigationMenu()
    function scroll(navnum)
    {
        document.getElementById('section' + navnum).scrollIntoView({behavior:"smooth"});
        console.log('clicked section' + navnum)
    }

    return(
        <main>
            <header className="page__header">
            <nav className="xnavbar__menu"  >
                <ul id="navbar__list" >
                    <li className="nav-item" id="nav1" onClick={() => { scroll(1); } }>
                        Section 1
                    </li>
                    <li className="nav-item" id="nav2" onClick={() => { scroll(2); } }>
                        Section 2
                    </li>
                    <li className="nav-item" id="nav3" onClick={() => { scroll(3); } }>
                        Section 3
                    </li>
                </ul> 
            </nav>
            </header>
            <header className="main__hero">
                <h1>Landing Page </h1>
            </header>
            <section id="section1" data-nav="Section 1">
                <div className="xlanding__container">
                    <h2>Section 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

                    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
                </div>
            </section><section id="section2" data-nav="Section 2">
                <div className="xlanding__container">
                    <h2>Section 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

                    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
                </div>
            </section><section id="section3" data-nav="Section 3">
                <div className="xlanding__container">
                    <h2>Section 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

                    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
                </div>
            </section>
        </main>
    )
    
  }
  export default LandingPage;