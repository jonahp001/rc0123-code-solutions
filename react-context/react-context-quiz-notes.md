# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?

- What values can be stored in context?

- How do you create context and make it available to the components?

- How do you access the context values?

- When would you use context? (in addition to the best answer: "rarely")


## Notes

All student notes should be written here.

Context values are passed from the main parent-- in this case the App.js
values are added to the contextValue object that can be accessed by any child component.
we determine what is a child by wrapping any relavent child components/ routes with <AppContext.Provider value={contextValue}> (AppContext being imported from the file of the same name that created the context). this step serves to actually provide context to children.
from there, in child components, useContext can be called to use the properties from the main contextValue object

For flow of data of features:
users first see initial page provided via App.js
  if it is a new user, a user can click on the button on the top left for sign up
  the NavBar.js handles the click which then allows users to enter info and then register
  registration is handled via AuthForm.js, which on clicking the register button, sends a post request via server.js to the database to store the new username and hashed password
  the view also changes back to the sign in page where the user can re-enter their info and click the login button. this sends another post request to the server that then compares what is entered to what is in the database and ensures they are the same. If the user exists and password is correct, a token is passed to the user and they can access the site.
  an imported gif plays, and the navbar changes to show a sign out button instead of sign in or sign up.
  on page reload, users will stay signed in because of the token provided to them from useEffect
  when user clickes sign out button, the handleSignOut function is called and 'takes back' the token, so the user goes back to the main screen

How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
