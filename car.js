AFRAME.registerComponent('car', {
    schema: {
        xPosition: {type: 'number', default: 1}
    },
    tick: function(){
        this.data.xPosition = this.data.xPosition + 1
        var position = this.el.getAttribute("rotation")
        position.x = this.data.xPosition
        this.el.setAttribute("rotation", {x: position.x, y: position.y, z: position.z})
    },
    update: function(){
        window.addEventListener("click", (e)=>{
            this.data.clickCounter = this.data.clickCounter + 1;
            if(this.data.clickcounter == 1){
                const rotation = {x:0, y:20, z:0};
                this.el.setAttribute("rotation", rotation);
            }
            else if(this.data.clickCounter == 2){
                const rotation = {x:0, y:0, z:20};
                this.el.setAttribute("rotation", rotation);
            }
            else if(this.data.clickCounter == 3){
                const rotation = {x:20, y:0, z:0};
                this.el.setAttribute("rotation", rotation);
            }
        })
    }
})