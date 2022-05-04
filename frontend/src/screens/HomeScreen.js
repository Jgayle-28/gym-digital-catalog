import BestSellers from '../components/product/BestSellers';
import ProductsPage from '../components/product/ProductsPage';

const HomeScreen = () => {
  return (
    <>
      {/* TODO  Finish best sellers styles */}
      <ProductsPage />
      {/* Best Sellers */}
      {/* <BestSellers /> */}
      {/* Info Sections */}
      <section class='info-section bg-light mt-10' id='info'>
        <div class='px-4 px-lg-5'>
          {/* image left */}
          <div class='row gx-0 mb-4 mb-lg-5 align-items-center'>
            <div class='col-xl-8 col-lg-7'>
              <img
                class='img-fluid mb-3 mb-lg-0'
                src='/images/landing/landing-delivery.png'
                alt='...'
              />
            </div>
            <div class='col-xl-4 col-lg-5'>
              <div class='featured-text-right text-center text-lg-left'>
                <h4>Fast Delivery</h4>
                <p class='text-black-50 mb-0'>
                  Delivered right to your door step!
                  <br />
                  Contact us to set up a delivery.
                </p>
                <br />
                <a href='#'>Contact Us Now</a>
              </div>
            </div>
          </div>
          {/* Four squares */}
          <div class='row gx-0 mb-5 mb-lg-0 justify-content-center'>
            <div class='col-lg-6'>
              <img
                class='img-fluid'
                src='/images/landing/home-gym.png'
                alt='...'
              />
            </div>
            <div class='col-lg-6'>
              <div class='bg-black text-center h-100 project'>
                <div class='d-flex h-100'>
                  <div class='project-text w-100 my-auto text-center text-lg-left'>
                    <h4 class='text-white'>Intense Workouts From Home</h4>
                    <p class='mb-0 text-white-50'>
                      No longer do you have to leave the comfort of your home to
                      experience a full body workout! ​Black Iron Strength
                      prides itself in bringing premium quality workout
                      equipment within the reach of consumers like you.
                    </p>
                    <hr class='d-none d-lg-block mb-0 ms-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='row gx-0 justify-content-center'>
            <div class='col-lg-6'>
              <img
                class='img-fluid'
                src='/images/landing/gym-machines.png'
                alt='...'
              />
            </div>
            <div class='col-lg-6 order-lg-first'>
              <div class='bg-black text-center h-100 project'>
                <div class='d-flex h-100'>
                  <div class='project-text w-100 my-auto text-center text-lg-right'>
                    <h4 class='text-white'>Full Workout Machines</h4>
                    <p class='mb-0 text-white-50'>
                      If you are looking for a full body workout experience for
                      your home or commercial gym, then here are the options
                      that we offer!
                    </p>
                    <hr class='d-none d-lg-block mb-0 me-0' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image right */}
          <div class='row gx-0 mt-5 mb-lg-5 align-items-center'>
            <div class='col-xl-4 col-lg-5'>
              <div class='featured-text-left text-center text-lg-left'>
                <h4>Payment</h4>
                <p class='text-black-50 mb-0'>
                  We want to provide the best experience for you when you
                  receive our equipment. ​We give multiple options for payments
                  such as cash, check or online payments such as Venmo or Zelle!
                  Whatever works best for you is our preferred method.
                </p>
              </div>
            </div>
            <div class='col-xl-8 col-lg-7'>
              <img
                class='img-fluid mb-3 mb-lg-0'
                src='/images/landing/payment.png'
                alt='...'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
