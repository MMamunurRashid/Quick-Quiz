import React from "react";

const Blog = () => {
  return (
    <div className="sm:w-4/5 m-auto w-11/12">
      <div className="pb-20">
        <div className="mt-10 p-5 rounded-xl bg-slate-700">
          <h1 className="text-3xl text-center font-mono">
            Blog-1: What is Purpose of React Router
          </h1>
          <p className="text-xl mt-5 font-sans">
            <strong> Routing</strong> is a process in which a user is directed
            to different pages based on their action or request.
            <strong> ReactJS Router</strong> is mainly used for developing
            <strong> Single Page Web Applications(SPA)</strong>. React Router is
            used to define multiple routes in the application. When a user types
            a specific URL into the browser, and if this URL path matches any
            'route' inside the router file, the user will be redirected to that
            particular route.
          </p>
          <p className="text-xl mt-5 font-sans">
            <strong>React Router</strong> is a standard library system built on
            top of the <strong>React</strong> and used to create routing in the
            <strong> React application</strong> using
            <strong> React Router Package</strong>. It provides the synchronous
            URL on the browser with data that will be displayed on the web page.
            It maintains the standard structure and behavior of the application
            and mainly used for developing single page web applications.
          </p>
        </div>
        <div className="mt-10 p-5 rounded-xl bg-slate-700">
          <h1 className="text-3xl text-center font-mono">
            Blog-2: How does Context API work?
          </h1>
          <p className="text-xl mt-5 font-sans">
            The <strong> React Context API</strong> is a way for a React app to
            effectively produce global variables that can be passed around. This
            is the alternative to<strong> prop drilling</strong> or
            <strong> moving props</strong>
            from grandparent to child to parent, and so on.
            <strong> Context</strong> is also touted as an easier, lighter
            approach to state management using <strong> Redux.</strong>
          </p>
          <p className="text-xl mt-5 font-sans">
            <strong>React.createContext()</strong> is all you need. It returns a
            consumer and a provider. Provider is a component that as it's names
            suggests provides the state to its children. It will hold the
            "store" and be the parent of all the components that might need that
            store. Consumer as it so happens is a component that consumes and
            uses the state. More information can be found on --&gt;
            <a
              className="text-xl text-yellow-200 font-serif"
              target="blank"
              href="https://reactjs.org/docs/context.html"
            >
              React's documentation page
            </a>
          </p>
        </div>
        <div className="mt-10 p-5 rounded-xl bg-slate-700">
          <h1 className="text-3xl text-center font-mono">
            Blog-3: How does useRef work?
          </h1>
          <p className="text-xl mt-5 font-sans">
            <strong>React useRef Hook : </strong> <br />
            useRef returns a mutable ref object whose .current property is
            initialized to the passed argument (initialValue). The returned
            object will persist for the full lifetime of the component. <br />{" "}
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
          <p className="text-xl mt-5 font-sans">
            <strong>Does Not Cause Re-renders: </strong> <br /> If we tried to
            count how many times our application renders using the useState
            Hook, we would be caught in an infinite loop since this Hook itself
            causes a re-render. To avoid this, we can use the useRef Hook.
          </p>
          <p className="text-xl mt-5 font-sans">
            <strong>Accessing DOM Elements</strong> <br /> In general, we want
            to let React handle all DOM manipulation. But there are some
            instances where useRef can be used without causing issues. In React,
            we can add a ref attribute to an element to access it directly in
            the DOM.
          </p>
          <p className="text-xl mt-5 font-sans">
            <strong>Tracking State Changes : </strong> <br /> The useRef Hook
            can also be used to keep track of previous state values. This is
            because we are able to persist useRef values between renders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
