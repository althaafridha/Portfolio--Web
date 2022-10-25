$(document).ready(function () {
  new Typed("#typed", {
    strings: [
      "an Android Developer",
      "a Web Developer",
      "a Flutter Developer",
      "a Student",
    ],
    typeSpeed: 70,
    delasSpeed: 70,
    backSpeed: 30,
    loop: true,
  });
});

AOS.init();

$("#model2").mousemove(function (e) {
  setTimeout(function () {
    $("#model2").removeClass("animate__lightSpeedInLeft");
  }, 1000);
});

$(document).on("click", "#box1", function (event) {
  Swal.fire({
    title: "<strong>Kotlin</strong>",
    html: "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of its standard library depends on the Java Class Library, but type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript or native code (via LLVM) for e.g. native iOS apps sharing business logic with Android apps. Kotlin is developed by JetBrains, the company behind IntelliJ IDEA, the most popular Java IDE.",
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: true,
  });
});

$(document).on("click", "#box2", function (event) {
  Swal.fire({
    title: "<strong>Flutter</strong>",
    html: "Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.",
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: true,
  });
});

$(document).on("click", "#box3", function (event) {
  Swal.fire({
    title: "<strong>HTML</strong>",
    html: "HTML is the standard markup language for creating Web pages. With HTML you can create your own Website. This tutorial teaches you everything about HTML. HTML is easy to learn - You will enjoy it.",
    showCloseButton: false,
    showCancelButton: false,
    focusConfirm: true,
  });
});

$(document).ready(function () {
  $("#status").fadeOut(10000);
  $("#preloader").delay(1000).fadeOut(1000);
  $("body").delay(500).css({ overflow: "visible" });
});
