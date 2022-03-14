# Week 8

Particle systems are really interesting. It's interesting the way the particle class functions like a mini-program in the program itself - there is a sort of setup, an update, and it can be set up to start and stop. This week was fairly straight forward. I managed to run into some strange problems which lead to the creation of the 'event()' function. I won't go into the details, but I ended up with a remaining bug: after destroying the rock, the object and collider are gone, but the player still 'glitches out' when they move around that area. 
