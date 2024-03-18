TODO - put info here

### Updating State with  the most up to date version of itself
You could update state like this:
```javascript
const [active, setActive] = useState(false);
setActive(!active)
```
But that isn't the way React recommends this and wouldn't give you the most accurate result. Instead, do the following:

```javascript
const [active, setActive] = useState(false);
setActive(active => !active)
```
This way you get the most up to date value possible