function loadFileFromDropbox() {
  const accessToken = 'sl.BoLytBum-Li21IGbqBkNRpCJ8jI7BP0Ud6wtjjTEAeyzhgybIR9A3iubzsuvl--5FFyjGXyGKLlGQIfgu66TqxYvwSDXVk5CoQA3AKBiboZ9fvOcXHWiBI-8Gvztu0dT0sPJs5un3yJ3'; // Замените на ваш access token Dropbox
  const fileUrl = 'https://www.dropbox.com/scl/fi/7kehwl7d0kymfs7oqce9c/news_1.docx'; // Замените на вашу ссылку на файл

  const xhr = new XMLHttpRequest();
  xhr.open('GET', fileUrl);
  xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const fileContent = xhr.responseText;
      document.getElementById('fileContent').innerText = fileContent;
    } else {
      console.error('Error loading file from Dropbox:', xhr.statusText);
    }
  };

  xhr.send();
}