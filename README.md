# [D] NEXT.JS: API RENDERING COMPLEXITIES

## 4. CODEFEED INTERNAL API SETUP

### A. UNDERSTANDING THE "NEXT API"

**ARCHITECTURE:** The Next.js integrated API runs off Node.js, which therefore allows us to write our backend code in JavaScript

- HOWEVER - it does not utilise `Express`, so our structure of our API will not be the same (or as complex) as your APIs in API Design

- **VIEWPOINT:** Think of Next API like another type of Express - it can still handle requests & responses, but obscures some features we need to configure in Express like `bodyParser` and the `router` - [SEE MORE](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

- **OURS WILL BE BASIC:** Simple `GET` request at the `http://localhost:3000/api/news` endpoint

&nbsp;

### B. SETUP OF NEXT API & "DEPLOYMENT CONSIDERATION"

**(a) Create NEW API path in `/api`**

- Create new file in the `/api` folder for our endpoint: `news.js`

- Import the hard-coded database: `import { articles } from '../../../database/db';`

- Create a new `handler` function, check the method is `GET` and send back a response with the news array of objects: `res.status(200).json(news)`

- **ADDITIONAL:** If you would like a look at a more robust Next.js API, using the mock `.json` data, see: https://youtu.be/urPyuOIjoPI

&nbsp;

2. **Adjust `index.jsx` to call the new endpoint on the server**

- Invoke `getStaticProps` in `index.jsx` and we will call our custom API - being from the VERY same location as our application: `localhost:3000`

- Make the fetch request to this endpoint - noting our endpoint can flex based on `next.config.js`, as long as we pass `SERVER_NAME` into our endpoint + the slug `/api/news`

- Log the data as part of the `ngsp`, so it will appear server-side

- **CHALLENGE: If this is API data, where else could we check this?**

&nbsp;

**DISCLAIMER:** This is as far as we go for timebeing:

- We will now DEPLOY our next app

- We will comment OUT this server-side call to our api for timebeing

- **MAIN REASON:** We cannot build an application which both renders and simultaneously sends data from itself at the same time. We need to build the static app + api FIRST -> then render the call to our api once setup!
