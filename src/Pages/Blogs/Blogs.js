import React from 'react';

const Blogs = () => {
    return (
        <section className='lg:max-w-7xl mx-auto mt-16'>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6 lg:w-3/4 mx-auto p-5">
                <div class="collapse-title text-2xl font-medium">
                <h2 >1. How will you improve the performance of a React Application?</h2>
                </div>
                <div class="collapse-content text-xl "> 
                <p>Ans: * Keeping component state local where necessary. <br /><br />
                   * Memoizing React components to prevent unnecessary re-renders. <br /> <br />
                   * Code-splitting in React using dynamic import() <br /><br />
                   * Windowing or list virtualization in React. <br /><br />
                   * Lazy loading images in React.</p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6 lg:w-3/4 mx-auto">
                <div class="collapse-title text-2xl font-medium">
                <h2 >2. What are the different ways to manage a state in a React application?</h2>
                </div>
                <div class="collapse-content text-xl"> 
                <p>There are four main types of state you need to properly manage in your React apps: <br /> <br />

                <span className='font-semibold'>  Local state: </span> Local state is data we manage in one or another component. Local state is most often managed in React using the <span className='font-bold'>useState </span> hook. <br /><br />
                <span className='font-semibold'> Global state: </span> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br /><br />
                <span className='font-semibold'> Server state: </span> Data that comes from an external server that must be integrated with our UI state. <br /><br />
                <span className='font-semibold'> URL state:</span> Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
                </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6 lg:w-3/4 mx-auto">
                <div class="collapse-title text-2xl font-medium">
                <h2 >3. How does prototypical inheritance work?</h2>
                </div>
                <div class="collapse-content text-xl"> 
                <p> Ans:  The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6 lg:w-3/4 mx-auto">
                <div class="collapse-title text-2xl font-medium">
                <h2 >4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                </div>
                <div class="collapse-content text-xl "> 
                <p>If you update it directly, calling the setState() afterward may just replace the update you made.  <br /><br />
                When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. <br /><br />
                You will lose control of the state across all components.</p>
                </div>
            </div>

            

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6 lg:w-3/4 mx-auto">
                <div class="collapse-title text-2xl font-medium">
                <h2 >5. What is a unit test? Why should write unit tests?</h2>
                </div>
                <div class="collapse-content text-xl "> 
                <p>Ans: Unit testing is a method that instantiates a small part of our code and verifies its behavior independently from other parts of the project. <br /><br />
                
                This is the main benefit of unit testing. When you add more features to any software, you might need to make changes to the old design and code, and this can be expensive as well as risky. If you use the unit testing methodology, then this can save a lot of time and can make the whole process much faster and easier.
                Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;