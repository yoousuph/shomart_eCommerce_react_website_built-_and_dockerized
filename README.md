# ShopMart React Build and Dockerization

This project explains the dockerization of an E-Commerce website built with React Javascript library.

---

# ShopMart Dockerized React Application

## Overview

ShopMart is a React application built with Vite and containerized using Docker. This project demonstrates how to:

* Start with building React Application
* Push code to GitHub from Local Git repository
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
* Git & GitHub

---

## Prerequisites

Before running this project, ensure you have installed:

* Docker Desktop
* Git
* Node.js

---

## Start with crating Vite

```bash
npx create-vite@latest
```

---

## Edit to your custom folders for the App

```text
1. Customize App.jsx file based on preferences
2. Create new components based on bussiness requirements
3. Install react-hook (for applying certain hooks), react-router-dom (for routing among pages)
3. See project structure in the next section as 
```

![reactApp.JPG](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/reactApp.jpg)

![Project product_card_code.JPG](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/product_card_code.jpg)

![vite_code.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/vite_code.jpg)
Preferably comment out the default vite defineConfig in vite.cobfig.js file where usePolling is set to "true" for looking out for app changes on the machine to take effect in the container.

---

## Push source code to GitHub from local Git Repository

![git_actions.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/git_actions.jpg)

![git_actions2.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/git_actions2.jpg)

![git_actions3.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/git_actions3.jpg)

![git_actions4.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/main/imgs/git_actions3.jpg)

![git_actions5.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/main/imgs/git_actions5.jpg)

---

## initiate Vite hot reload to see app build process on the web browser

```bash
npm run dev
```
App should start running on port 5173 

![npm_run_dev.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/npm_run_dev.jpg)

![shopmart_vite_port.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/shopmart_vite_port.jpg)

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

---

## Check docker images 

```bash
docker images
```
you an also check and confirm on Docker Desktop App

![docker_build_run.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/docker_desktop_img.jpg)

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
![docker_build_run.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/docker_build_run.jpg)

![docker_desktop_container.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/docker_desktop_container.jpg)

![docker_container_running.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/docker_container_running.jpg)

---

## Confirm app is running on the browser

Open on the browser and paste below link on the URL:

```text
http://localhost:3000
```

![shpmart_ui.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/shpmart_ui.jpg)

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

## Using a docker-compose.yaml file

![docker-compose.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/docker-compose.jpg)

![composed-container-running.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/composed-container-running.jpg)

---

## Docker Hub Repository

Docker Image:

```text
yoousuph/shopmart_app:0.1
```

### Repository

![Project Screenshot 1.JPG](C:\Users\REALITY\Documents\Projects\Cloud\aws_3tier_architecture\imgs\1.JPG)

---

## Creating an image to be pushed to Docker Hub Repository

```bash
docker build -t yoousuph/shopmart_app:0.1
```

![img_in_repo.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/img_in_repo.jpg)

![img_public_view.jpg](https://github.com/yoousuph/shomart_eCommerce_react_website_built-_and_dockerized/blob/development/imgs/img_public_view.jpg)

---

## Lessons Learned

* Building a React Application from scratch
* Creating Docker images using Dockerfile
* Running and managing containers
* Working with Docker volumes
* Debugging container networking issues
* Using Vite inside Docker
* Git Actions
* Publishing images to Docker Hub

---

## Author

**Yusuf Kehinde**

IT Infrastructure Engineer | Cloud/DevOps Engineer
