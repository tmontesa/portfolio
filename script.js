
    var headings = document.getElementsByTagName("H2");
    var sections = document.getElementsByClassName("section");
    
    for (var h = 0; h < headings.length; h++) {
        var heading = headings[h];
        heading.section = sections[h];
        heading.addEventListener("click", function() {
            if (this.section.classList.contains("collapse")) {
                this.classList.remove("collapsed_header");
                this.section.classList.remove("collapse");
            } else {
                this.classList.add("collapsed_header");
                this.section.classList.add("collapse");
            }
            
        });
    }

    

