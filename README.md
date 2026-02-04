# Polixo

Polixo is a tiny, framework-agnostic rule and policy engine for JavaScript.  
It evaluates ordered rules against plain data and returns a deterministic decision.

---

##  Installation

```bash
npm install polixo
```

---

##  Quick Start

```javascript
import { createEngine } from 'polixo'

const engine = createEngine({
  rules: [
    {
      when: (ctx) => ctx.age < 18,
      effect: 'DENY',
      reason: 'UNDERAGE'
    },
    {
      when: (ctx) => ctx.country === 'IN',
      effect: 'ALLOW'
    }
  ]
})

engine.evaluate({ age: 20, country: 'IN' })
// => { effect: 'ALLOW', reason: null }
```

---

##  How It Works
- Rules are evaluated **top to bottom**  
- The **first matching rule wins**  
- If no rule matches, the result is:  
  ```json
  { "effect": "NEUTRAL", "reason": null }
  ```

---

##  What Polixo is NOT
- Not a framework  
- Not state management  
- Not data fetching  
- Not tied to React, Vue, or Node  

---

##  Design Principles
- Plain JavaScript  
- No dependencies  
- Deterministic behavior  
- Small, predictable core  

---

##  Contributing
Contributions are welcome!  
Please fork the repository, create a feature branch, and submit a pull request.

---

##  License
This project is licensed under the MIT License.