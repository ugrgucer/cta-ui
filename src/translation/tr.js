
const formfields = {
    email: 'E-Posta',
    password: 'Şifre',
    fullName: 'Tam Ad',
    username: 'Kullanıcı Adı',
}

module.exports = {
    email: 'E-Posta',
    password: 'Şifre',
    fullName: 'Tam Ad',
    username: 'Kullanıcı Adı',
    login: 'Giriş Yap', 
    register: 'Kayıt Ol',
    educator: 'Eğitmen',
    educators: 'Eğitmenler',
    categories: "Kategoriler",
    trends: 'Trendler',
    'Find a new course': 'Yeni bir kurs bul',
    'Be educator': 'Eğitmen Ol',
    or: 'ya da',

    messages: {
      'Login successful': 'Giriş başarılı',
      'Register successful': 'Kayıt başarılı'
    },
    
    form: {
        default: (name) => `${formfields[name]} alanında doğrulama hatası`,
        required: (name) => `${formfields[name]} alanı gereklidir!`,
        enum: (name, values) => `${formfields[name]} [${values}] değerlerinden biri olmalıdır`,
        whitespace: (name) => `${formfields[name]} boş bırakılamaz`,
        date: {
          format: (name) => `${formfields[name]} geçersiz tarih formatı`,
          parse: (name) => `${formfields[name]} tarih olarak ayrıştıralamadı`,
          invalid: (name) => `${formfields[name]} geçersiz tarih`,
        },
        types: {
          string: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          method: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          array: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          object: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          number: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          date: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          boolean: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          integer: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          float: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          regexp: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          email: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          url: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
          hex: (name, type) => `${formfields[name]} geçerli bir ${type} değildir`,
        },
        string: {
          len: (name, len) => `${formfields[name]} tam olarak ${len} karakterden oluşmalıdır`,
          min: (name, min) => `${formfields[name]} en az ${min} karakterden oluşmalıdır`,
          max: (name, max) => `${formfields[name]} en fazla ${max} karakterden oluşmalıdır`,
          range: (name, min, max) => `${formfields[name]} ${min} ila ${max} aralığında karakterden oluşmalıdır`,
        },
        number: {
          len: (name, len) => `${formfields[name]} ${len} değerine eşit olmalıdır`,
          min: (name, min) => `${formfields[name]} ${min} değerinden küçük olamaz`,
          max: (name, max) => `${formfields[name]} ${max} değerinden büyük olamaz`,
          range: (name, min, max) => `${formfields[name]} ${min} ila ${max} aralığında değer almalıdır`,
        },
        array: {
          len: (name, len) => `${formfields[name]} tam olarak ${len} uzunluğunda olmalıdır`,
          min: (name, min) => `${formfields[name]} en az ${min} uzunluğunda olmalıdır`,
          max: (name, max) => `${formfields[name]} en fazla ${max} uzunluğunda olmalıdır`,
          range: (name, min, max) => `${formfields[name]} ${min} ila ${max} aralığında bir uzunlukta olmalıdır`,
        },
        pattern: {
          mismatch: (name, pattern) => `${formfields[name]} alanı ${pattern} ifadesi ile eşleşmiyor`,
        },
    },
}