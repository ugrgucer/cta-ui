const formfields = {
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    username: 'Username',
    title: 'Title',
    description: 'Description',
    image: 'Image',
    banner: 'Banner',
    profilePicture: 'Profile Picture',
    seoLink: 'Seo Link',
    name: 'Name',
    language: 'Programming Language',
    document: 'Document',
    codes: 'Example Codes'
}

module.exports = {
    email: 'Email',
    fullName: 'Full Name',
    username: 'Username',
    password: 'Password',
    login: 'Log In',
    register: 'Register',
    educator: 'Educator',
    educators: 'Educators',
    categories: 'Categories',
    trends: 'Trends',
    'Find a new course': 'Find a new course',
    'Be educator': 'Be educator',
    or: 'ya da',
    'Educator Panel':'Educator Panel',
    'Create a course': 'Create a course',
    'My courses': 'My courses',
    course: 'Course',
    course_title: 'Course Title',
    description: 'Description',
    save: 'Save',
    image: 'Image',
    banner: 'Banner',
    "Click to Upload": 'Click to Upload',
    profile_picture: 'Profile Picture',
    educator_username: 'Educator Username',
    educator_name: 'Educator Name',
    seo_link: 'Seo Link',
    createdAt: 'Created Date',
    updatedAt: 'Last Updated Date',
    edit: 'Edit',
    delete: 'Delete',
    'Add a New Section': 'Add a New Section',
    yes: 'Yes',
    no: 'No',
    programming_language: 'Programming Language',
    sections: 'Sections',
    section_title: 'Section Title',
    document: 'Document',
    example_codes: 'Example',
    'Edit Course': 'Edit Course',
    'Edit Section': 'Edit Section',
    create_document: 'Create Document',
    'No section added for this course': 'No section added for this course',
    'No document added for this section': 'No document added for this section',
    document_count: 'Document Count',
    'Update My Informations': 'Update My Informations',
    'Number Of Course' : 'Number Of Course',
    'Number Of Student' : 'Number Of Student',
    'Number Of Document' : 'Number Of Document',
    'Publish':'Publish',
    'Unpublish':'Unpublish',
    courses: 'Courses',
    'Edit My Informations':'Edit My Informations',
    'resume': 'Resume',
    'website':'Web Site',
    'title':'Title  ',
    'twitter':'Twitter',
    'facebook':'Facebook',
    'linkedin':'LinkedIn',
    'youtube':'YouTube',

    messages: {
      'Login successful': 'Login successful',
      'Register successful': 'Register successful',
      'Transaction successful': 'Transaction successful',
      'Are you sure delete this course?': 'Are you sure delete this course?',
    },
    form: {
        default: (name) => `Validation error on field ${formfields[name]}`,
        required: (name) => `${formfields[name]} is required`,
        enum: (name, values) => `${formfields[name]} must be one of [${values}]`,
        whitespace: (name) => `${formfields[name]} cannot be empty`,
        date: {
          format: (name) => `${formfields[name]} is invalid for format date`,
          parse: (name) => `${formfields[name]} could not be parsed as date`,
          invalid: (name) => `${formfields[name]} is invalid date`,
        },
        types: {
          string: (name, type) => `${formfields[name]} is not a valid ${type}`,
          method: (name, type) => `${formfields[name]} is not a valid ${type}`,
          array: (name, type) => `${formfields[name]} is not a valid ${type}`,
          object: (name, type) => `${formfields[name]} is not a valid ${type}`,
          number: (name, type) => `${formfields[name]} is not a valid ${type}`,
          date: (name, type) => `${formfields[name]} is not a valid ${type}`,
          boolean: (name, type) => `${formfields[name]} is not a valid ${type}`,
          integer: (name, type) => `${formfields[name]} is not a valid ${type}`,
          float: (name, type) => `${formfields[name]} is not a valid ${type}`,
          regexp: (name, type) => `${formfields[name]} is not a valid ${type}`,
          email: (name, type) => `${formfields[name]} is not a valid ${type}`,
          url: (name, type) => `${formfields[name]} is not a valid ${type}`,
          hex: (name, type) => `${formfields[name]} is not a valid ${type}`,
        },
        string: {
          len: (name, len) => `${formfields[name]} must be exactly ${len} characters`,
          min: (name, min) => `${formfields[name]} must be at least ${min} characters`,
          max: (name, max) => `${formfields[name]} cannot be longer than ${max} characters`,
          range: (name, min, max) => `${formfields[name]} must be between ${min} and ${max} characters`,
        },
        number: {
          len: (name, len) => `${formfields[name]} must equal ${len}`,
          min: (name, min) => `${formfields[name]} cannot be less than ${min}`,
          max: (name, max) => `${formfields[name]} cannot be greater than ${max}`,
          range: (name, min, max) => `${formfields[name]} must be between ${min} and ${max}`,
        },
        array: {
          len: (name, len) => `${formfields[name]} must be exactly ${len} in length`,
          min: (name, min) => `${formfields[name]} cannot be less than ${min} in length`,
          max: (name, max) => `${formfields[name]} cannot be greater than ${max} in length`,
          range: (name, min, max) => `${formfields[name]} must be between ${min} and ${max} in length`,
        },
        pattern: {
          mismatch: (name, pattern) => `${formfields[name]} does not match pattern ${pattern}`,
        },
    },
}