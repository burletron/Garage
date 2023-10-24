function createThread() {
  const threadTitle = prompt("Введите название темы:");
  if (threadTitle) {
    const thread = document.createElement('div');
    thread.classList.add('thread');

    const threadTitleElement = document.createElement('h2');
    threadTitleElement.textContent = threadTitle;

    const threadContent = document.createElement('p');
    threadContent.textContent = 'Содержимое темы.';

    thread.appendChild(threadTitleElement);
    thread.appendChild(threadContent);

    const forumContainer = document.querySelector('.forum-container');
    forumContainer.appendChild(thread);
  }
}