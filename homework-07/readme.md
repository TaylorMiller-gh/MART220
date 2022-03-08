# Week 7

I had a lot of fun trying to figure out what the hell I did wrong with this weeks project. I never really did find the exact solution to fix the original attempt (I left it in the comments.) I checked online and the only thing I found was that this could be a compatibility issue. I tried different versions though and that didn't work.


I'm sure it was how I handled the image paths. An 'animation error' occurred, saying images must be pngs. They are pngs, so it must have been trying to load the path strings from the text file. Either way, I dug through the character Object and found that the animation arrays were empty. Surely this is why a warning popped up saying frame 0 is undefined. I tried the 'standard method' of adding animations and it worked. Oh well - it functions I suppose.
