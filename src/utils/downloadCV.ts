export const handleDownloadResumee = () => {
  fetch('Resumee_2022.pdf').then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob)
      // Setting various property values
      const alink = document.createElement('a')
      alink.href = fileURL
      window.open(fileURL)
      // alink.download = 'Inigo_Moreno_Resume.pdf'
    })
  })
}
