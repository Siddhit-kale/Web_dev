import { useForm } from 'react-hook-form'
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
 
  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form Sumbitting", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Nmae:</label>
          <input 

            className = { errors.firstname ? 'input-error' : "" }

            {...register('firstname', {
              required: true,
              minLength: { value:3,
                message:"min length needed 3."
              },
              maxLength: { value:6, 
                message:"Max length should be 6."
              }
          })}/>
          
          {errors.firstname && <p className='error-message'>{errors.firstname.message}</p>}

        </div>
        <br />
        <div>
          <label>Middle Name:</label>
          <input {...register('middlename')}/>
        </div>
        <br />
        <div>
          <lable>Last Name:</lable>
          <input {...register('lastname')}/>
        </div>
        <br />
        <input type='submit' disabled={isSubmitting} value={
          isSubmitting ? "Submitting" : "Submited"
        }/>
        <br />
      
    </form>
  )
}

export default App
