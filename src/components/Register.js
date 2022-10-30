import React from 'react';

function Register(){
return (
    // sectionbackground
<section class="h-100 bg-dark">
    {/* container for registration card */}
  <div class="container py-5 h-100">
    {/* create row the entire height of container align and justify to center */}
    <div class="row d-flex justify-content-center align-items-center h-100">
        {/* create column with no restritcions so it takes up entire parent container  */}
      <div class="col">
        {/* create card */}
        <div class="card card-registration my-4">
            {/* on card create row */}
          <div class="row g-0">
            {/* create two columns unless below screen size xl*/}
            <div class="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo" class="img-fluid registration-pic"
                />
            </div>
            {/* create column that take up half of grid width for registration info*/}
            <div class="col-xl-6">
                {/* create info card */}
              <div class="card-body p-md-5 text-black">
                {/* create heading */}
                <h3 class="mb-5 text-uppercase">Registration form</h3>

                    {/* one column with margin on bottom of 4px*/}
                  <div class="col-md-6 mb-4">
                    {/* create form */}
                    <div class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1m">Name</label>
                    </div>
                  </div>

                    {/* one column with margin on bottom of 4px*/}
                    <div class="col-md-6 mb-4">
                    {/* create form */}
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n">Email</label>
                    </div>
                  </div>

                    {/* one column with margin on bottom of 4px*/}
                    <div class="col-md-6 mb-4">
                    {/* create form */}
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n">Phone Number</label>
                    </div>
                  </div>

                    {/* one column with margin on bottom of 4px*/}
                    <div class="col-md-6 mb-4">
                    {/* create form */}
                    <div class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1n">Password</label>
                    </div>
                  </div>



                {/* flex container that is justified so that it is always at the end with padding on top of 3px */}
                <div class="d-flex justify-content-end pt-3">
                  <button type="button" class="btn btn-light btn-lg">Reset all</button>
                  <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
//     <div class="grid-container">
//         <div class="grid-container-inner">
//             <div class="row m-4">
//                 <div>


//         <form>
//   {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
  
    
//       <div class="form-outline">
//         <input type="text" id="form3Example1" class="form-control" />
//         <label class="form-label" for="form3Example1">First name</label>
//       </div>
    
    
//       <div class="form-outline">
//         <input type="text" id="form3Example2" class="form-control" />
//         <label class="form-label" for="form3Example2">Last name</label>
//       </div>
    
  

//   {/* <!-- Email input --> */}
//   <div class="form-outline mb-4">
//     <input type="email" id="form3Example3" class="form-control" />
//     <label class="form-label" for="form3Example3">Email address</label>
//   </div>

//   {/* <!-- Password input --> */}
//   <div class="form-outline mb-4">
//     <input type="password" id="form3Example4" class="form-control" />
//     <label class="form-label" for="form3Example4">Password</label>
//   </div>

//   {/* <!-- Checkbox --> */}
//   <div class="form-check d-flex justify-content-center mb-4">
//     <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
//     <label class="form-check-label" for="form2Example33">
//       Subscribe to our newsletter
//     </label>
//   </div>

//   {/* <!-- Submit button --> */}
//   <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

//   {/* <!-- Register buttons --> */}
//   <div class="text-center">
//     <p>or sign up with:</p>
//     <button type="button" class="btn btn-primary btn-floating mx-1">
//       <i class="fab fa-facebook-f"></i>
//     </button>

//     <button type="button" class="btn btn-primary btn-floating mx-1">
//       <i class="fab fa-google"></i>
//     </button>

//     <button type="button" class="btn btn-primary btn-floating mx-1">
//       <i class="fab fa-twitter"></i>
//     </button>

//     <button type="button" class="btn btn-primary btn-floating mx-1">
//       <i class="fab fa-github"></i>
//     </button>
//   </div>
// </form>
//         </div>

//     </div>
//     </div>
//             </div>

)
}

export default Register;