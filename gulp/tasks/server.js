export const server = (done) => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.html}` //отсюда запускаем сервер
    },
    notify: false,
    port: 3000,
  });
}
