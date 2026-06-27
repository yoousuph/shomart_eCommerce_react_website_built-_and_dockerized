# ShopMart React Build and Dockerization

This explains the dockerization of an e-commerce website built with React Javascript library.


---

# ShopMart Dockerized React Application

## Overview

ShopMart is a React application built with Vite and containerized using Docker. This project demonstrates how to:

* Build Docker images
* Run containers
* Use Docker volumes for development
* Expose ports
* Push images to Docker Hub
* Containerize a frontend application using React and Vite

---

## Tech Stack

* React
* Vite
* Docker
* Docker Hub
* Node js

---

## Prerequisites

Before running this project, ensure you have installed:

* Docker Desktop
* Git
* Node.js (optional for local development)

---

## Start with crating Vite

```bash
npx create-vite@latest
```

![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)

---

## Edit to your custom folders for the App

```text
1. Customize App.jsx file based on preferences
2. Create new components based on bussiness requirements
3. See project structure in the next section as 
```

![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)

![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)

![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)

---

## initiate Vite hot reload to see app build process on the web browser

```bash
npm run dev
```
App should start running on port 5173 

![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)
---

## Project Structure

```text
shopmart-ecommerce-website/
├── public/
├── src/
|     ├── assets
|     ├── components
|     ├── data
|     ├── pages
|      App.css
|      App.jsx
|      index.css
|      main.jsx
├── .dockerignore
├── .gitignore
├── Dockerfile
├── eslint.cnfig.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## Build docker image (build process looks out for a Dockerfile)

```bash
docker build -t shopmart:0.1 .
```

![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)

---

## Check docker images 

```bash
docker images
```
you an also check and confirm on Docker Desktop App

---

## Run the Container

```bash
docker run \
-p 3000:5173 \  # 3000 for host, 5173 for the app
-v C:\Users\Administrator\Documents\Projects\Web_dev\shopmart-ecommerce-website:/App \  # Volume for updating app in the container as changes is made to the app on your local machine.
-v /App/node_modules \  # Volume for node_modules in case of accidental delete in the system file.
--name shopmart_c_0.1 \  # container name
shopmart:0.1  # image name with which container runs
```
---

## Confirm app is running on the browser

Open:

```text
http://localhost:3000
```

![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)

---

### View Containers

```bash
docker ps
```

### View Logs

```bash
docker logs shopmart_c_0.1
```

### Stop Container

```bash
docker stop shopmart_c_0.1
```

### Remove Container

```bash
docker rm -f shopmart_c_0.1
```

---

## Docker Hub Repository

Docker Image:

```text
yoousuph/shopmart_app:0.1
```

![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)

---

## Creating an image to be pushed to Docker Hub Repository

```bash
docker build -t yoousuph/shopmart_app:0.1
```
![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)

---

## Lessons Learned

* Creating Docker images using Dockerfile
* Running and managing containers
* Working with Docker volumes
* Debugging container networking issues
* Using Vite inside Docker
* Publishing images to Docker Hub

---

## Author

**Yusuf Kehinde**

IT Infrastructure Engineer | Cloud Engineer | DevOps Enthusiast
