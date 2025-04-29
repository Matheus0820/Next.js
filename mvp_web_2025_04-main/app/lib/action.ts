export const addTest = async (formData: FormData) => {
    'use server'
    
    let name = formData.get('name')
    console.log('addTest: ' + name)
}