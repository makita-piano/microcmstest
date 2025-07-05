<template>
  <div>
    <Breadcrumb :breadcrumbsArray="breadcrumbsArray" />

    <section class="contact-section">
      <div class="content">
        <small>お問い合わせ</small>
        <h1>Contact</h1>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'お問い合わせ | Jamstack構成のWebサイト制作',
  description: 'ご質問やご相談はこちらからお問い合わせください。ビジネスを支える最適なWebサイト制作をご提案いたします。',
});

const route = useRoute();

const breadcrumbsArray = [
  {
    name: 'お問い合わせ',
    path: route.path
  }
]

// フォームデータ
</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 0 auto;
}

form div {
  margin-bottom: 2em;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  font-size: 16px;
}

label span {
  color: red;
  font-size: 14px;
  margin-left: .2em;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  background-color: #fff;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  border-color: #007BFF;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.privacy-policy {
  display: flex;
  align-items: center;
  /* 垂直方向の中央揃え */

  input[type="checkbox"] {
    margin-right: 8px;
    /* チェックボックスとテキストの間に余白を追加 */
  }

  label {
    display: flex;
    align-items: center;
    /* ラベル内のテキストも中央揃え */
  }

  a {
    text-decoration: none;
    color: #007BFF;
    /* リンクの色を指定 */
  }

  a:hover {
    text-decoration: underline;
    /* ホバー時に下線を追加 */
  }
}

.privacy-policy input[type="checkbox"] {
  margin-right: 0.5em;
  margin-top: 0;
}

button.confirm {
  padding: 12px 20px;
  background-color: #007BFF;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.confirm:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

button.confirm:hover:not(:disabled) {
  background-color: #0056b3;
}

button.confirm:active:not(:disabled) {
  background-color: #003d80;
}

.thank-you-message {
  text-align: center;
  padding: 20px;
}

.thank-you-message h2 {
  font-size: 24px;
  color: #007BFF;
}

.thank-you-message p {
  font-size: 16px;
  color: #333;
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
  }

  button.confirm {
    width: 100%;
  }
}
</style>