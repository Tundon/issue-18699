## To Reproduce

1. Set the system apperance to light mode, `npm install` and `npm start`
2. Watch the console, which prints:
   ```
   initial background color:  #e8e8e8
   ```
3. Change the system appearance to dark mode, note in the console:
   ```
   changed background color:  #e8e8e8
   ```

### Expected:
In step 3, the code to get color `systemPreferences.getColor("window-background")` is supposed to get dark mode background color, which is `#252525`, but it is still geting light mode background color