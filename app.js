window.onload=function() {
new Vue ({
        el : "#app",
        data: {
            player_heal: 100,
            monster_heal: 100,
            game_is_on: false,
        },
        methods: {
            start_game: function(){
                this.game_is_on = true;    
            },
            attack: function(){
                var point= Math.ceil(Math.random()*10);
                this.monster_heal-=point;
                this.monster_attack();                             
                },
            special_attack: function(){
                var point= Math.ceil(Math.random()*25);
                this.monster_heal-=point;
                this.monster_attack();               
            },
            heal_up: function(){
                var point= Math.ceil(Math.random()*20);
                this.player_heal+=point;
                this.monster_attack();
                
            },
            give_up: function(){
                this.player_heal=0;
            
            },
            monster_attack: function(){
                var point= Math.ceil(Math.random()*15);
                this.player_heal-=point;
            
            },
        }
    });
};