## 🚀 Getting Started

Follow the steps below to run this project locally:

### 1. Install dependencies

```bash
npm install
```

### 2. Run project in your local machine

```bash
npm run dev
```

Project Instruction:

### 1

```bash
First, the Home page will open. From there, you will see three menu links.
You can navigate to the Admin Login, Merchant Login, or Member Login pages either by clicking these links or by directly visiting the URLs:

http://localhost:3000/login/admin
http://localhost:3000/login/merchant
http://localhost:3000/login/member
```

### 2

```bash
You can log in to any of the login pages using dummy authentication to access the dashboard.
The login form fields have frontend validation, so you must enter valid information to log in successfully.
```

### 3

```bash
After accessing the dashboard, each user can only access the menu items assigned to their role.
The menus are private, so when a user logs in, they can access only their own menus and cannot access menus belonging to other roles.
```

### 4

```bash
If you log in as an Admin, you will not be able to access the Merchant’s menu.
Even if you try to visit the URL directly:
http://localhost:3000/dashboard/merchant
you will not have access and a Not Found page will be displayed, because you are logged in as an Admin.
```

### 5

```bash
On the dashboard, there is a Logout menu. When you log out, you will be redirected to the Home page, from where you can navigate to any of the login pages.

If a user is already logged in and another person tries to access the Home page directly via URL, the logged-in user will still see the Logout menu.
This is because only one user can be logged in at a time, and others (like Merchant or Member login pages) cannot be accessed while someone is logged in.
```
