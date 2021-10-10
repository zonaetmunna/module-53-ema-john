import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'

const Shipping = () => {
     const { register, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
     return (
          <div>
               <h1>this is shipping</h1>
               <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue="test" {...register("name")} />


                    <input {...register("exampleRequired", { required: true })} />

                    {errors.email && <span className="error">This field is required</span>}

                    <input type="submit" />
               </form>
          </div>
     );
};

export default Shipping;