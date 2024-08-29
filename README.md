# spring-break-countdown

just a little fun website i (kyle) made for my university church's spring break trip. hacked this together in a couple hours <br>
view it [here](http://howmanydaysuntilnewlifespringbreak.com/)

hi josh

## how to develop

### prereqs:

- git (lol if you dont have this)
- python3 (not strictly necessary but useful for local dev server)

### instructions:

1. clone the repo
   - if you have an [ssh key set up with github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account):
     - `git clone git@github.com:kyschnit/spring-break-countdown.git`
   - otherwise:
     - `git clone https://github.com/kyschnit/spring-break-countdown.git`
2. move into the repo
   - `cd spring-break-countdown`
3. start devserver
   - `python3 -m http.server`
   - open [localhost:8000](http://localhost:8000) in web browser
4. make code change
5. hard refresh web browser for code change to go into effect
   - `cmd + shift + r` on mac
   - `ctrl + shift + r` on windows
6. commit and push code change

## file structure

- `styles.css`: global styling for anything too specific for bootstrap to handle
- `README.md`: you're reading this right now
- `CNAME`: required for dns custom domain setup
- `scripts/`: js files that implement all website functionality
- `media/`: background videos/gifs and audio
  - `media/orig/`: unshrunken/unmodified versions of the background media

## notes

- **the only thing that really needs to be maintained is the spring break date.** the variable for this is in `countdown.js` with a bunch of comments around it
- depending on the year, there may be only beach trips or only mountain trips. i'll leave it up to you to decide whether to hide a background if that's the case.
- change whatever you want. if you have a grand vision for what you want the site to look like, go ahead. if you just want to change the date every year, that's great too
- i have no idea how `convertNumToWords` in `countdown.js` works. pretty sure i didn't write it. i'd stay away from it

## known issues

- site takes a LONG time to load
- mobile experience kinda sucks
