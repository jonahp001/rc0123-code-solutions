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
