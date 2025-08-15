// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
  const header = document.getElementById('masthead');
  const nav = document.getElementById('site-navigation');

  if (window.scrollY > 50) {
    header.style.padding = '1rem 1.5rem';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    nav.style.position = 'sticky';
    nav.style.top = '0';
    nav.style.zIndex = '100';
  } else {
    header.style.padding = '2rem 1.5rem';
    header.style.boxShadow = 'none';
    nav.style.position = 'static';
  }
});

// 创建回到顶部按钮
function createBackToTopButton() {
  const button = document.createElement('button');
  button.id = 'back-to-top';
  button.innerText = '↑';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.width = '50px';
  button.style.height = '50px';
  button.style.borderRadius = '50%';
  button.style.backgroundColor = 'var(--primary-color)';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.fontSize = '1.5rem';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  button.style.opacity = '0';
  button.style.visibility = 'hidden';
  button.style.transition = 'all 0.3s ease';
  button.style.zIndex = '1000';

  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  document.body.appendChild(button);
  return button;
}

const backToTopButton = createBackToTopButton();

// 显示/隐藏回到顶部按钮
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopButton.style.opacity = '1';
    backToTopButton.style.visibility = 'visible';
  } else {
    backToTopButton.style.opacity = '0';
    backToTopButton.style.visibility = 'hidden';
  }
});

// 文章卡片动画增强
document.addEventListener('DOMContentLoaded', function() {
  const articles = document.querySelectorAll('article');

  articles.forEach(article => {
    article.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
      this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
    });

    article.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    });
  });

  // 初始化动画
  setTimeout(() => {
    articles.forEach((article, index) => {
      setTimeout(() => {
        article.style.opacity = '1';
        article.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 100);
});

// 标签云悬停效果增强
const tagLinks = document.querySelectorAll('.tag-cloud-link');

tagLinks.forEach(tag => {
  tag.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) translateY(-3px)';
  });

  tag.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) translateY(0)';
  });
});