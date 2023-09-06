const Partner = ({ partner }) => {
  const { image, name, description, contact } = partner;
  if (partner)
    return (
        <>
            <img src={image} alt={name} style={{ width: '150px' }} /> 
                <div className='m-4'> 
                <h5 className='fw-bold'>{name}</h5>
                        {description}
                        <br></br>
                        <a
                            role='button'
                            className='btn btn-link'
                            href={contact}
                        >
                            <i className='fa fa-phone' />{contact}
                        </a>
                      
                </div>

        </>
     );
     return null;
};

export default Partner;

