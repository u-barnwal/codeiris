import DefaultLayout from '../layouts/defaultLayout';
import Heading from '../components/atomic/typography/Heading';
import { HeadingSize } from '../components/atomic/typography';
import TextField from '../components/atomic/textField';
import Button from '../components/atomic/button';

function Login() {
  return (
    <div className="w-screen flex justify-center items-center h-screen bg-gray-100">
      <div
        className="bg-white shadow rounded-2xl"
        style={{ width: '70vw', height: '70vh' }}
      >
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-center items-center w-full">
            <div>
              <div className="flex justify-center mb-5">
                <Heading
                  size={HeadingSize.H600}
                  style={{ fontSize: 60 }}
                  className="text-heading-light"
                >
                  Sing In
                </Heading>
              </div>
              <div>
                <TextField placeholder="Email" className="2xl:w-80" />
              </div>
              <div>
                <Button onClick={() => {}}>Sing In</Button>
              </div>
            </div>
          </div>
          <div className="bg-primary"></div>
        </div>
      </div>
    </div>
  );
}

Login.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Login;
