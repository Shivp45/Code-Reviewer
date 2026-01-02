# Code Reviewer
A smart code review tool powered by Google Gemini AI that analyzes your code, detects errors, and recommends improvements to enhance readability, efficiency, and reusability.

##  Features of Code Reviewer Tool

- Accepts code input in multiple languages and formats for review  
- Uses **Gemini LLM API** to generate intelligent, context-aware code reviews  
- Provides **bug detection, logic flaws, and security vulnerability analysis**  
- Suggests **optimized code improvements and best-practice recommendations**  
- Generates **refactored code snippets** that can be copied instantly  
- Gives **performance enhancement tips** (time/space complexity suggestions when applicable)  
- Reviews code structure, naming conventions, readability, and maintainability  
- Supports API key authentication via `.env` using:  
  ```env
  GEMINI_API_KEY=<YOUR_GEMINI_API_KEY>


## 🛠️ Tech Stack

- **Frontend:** React.js (Vite setup recommended)
- **Backend:** Node.js, Express.js
- **API Integration:** Google Gemini LLM (via API key)
- **Server Frameworks:** Express.js, REST APIs
- **Code Processing:** Supports multi-language code input

Image1
![Image1](./frontend/public/Image1.png)

Image2
![Image2](./frontend/public/Image2.png)

Image3
![Image3](./frontend/public/Image3.png)



## Installation & Setup

1) Clone the repository

```git clone https://github.com/Shivp45/Code-Reviewer.git
```

2) Backend Setup (Django)

```cd backend
   npm install 
   npx nodemon
```

2) Frontend Setup

```cd Frontend
   npm run dev
```

## Create .env inside /backend:

```GOOGLE_GEMINI_KEY=your_key_here
```

