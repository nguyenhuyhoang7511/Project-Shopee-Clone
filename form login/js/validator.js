function Validator(options) {
    let selectorRules = {};
  
    function Validate(inputElement, rule) {
      let parentElement = inputElement.parentNode;
      let errorElement = parentElement.querySelector(options.errorElement);
      let errorMessage;
      let rules = selectorRules[rule.selector];
      for (var i = 0; i < rules.length; i++) {
        errorMessage = rules[i](inputElement.value);
        if (errorMessage) {
          break;
        }
      }
      if (errorMessage) {
        parentElement.classList.add("invalid");
        errorElement.innerText = errorMessage;
      } else {
        parentElement.classList.remove("invalid");
        errorElement.innerText = "";
      }
      return errorMessage;
    }
  
    let formElement = document.querySelector(options.form);
    if (formElement) {
      formElement.onsubmit = function (e) {
        e.preventDefault();
        let isFormValid = true;
        options.rules.forEach((rule) => {
          let inputElement = document.querySelector(rule.selector);
          if (inputElement) {
            let isValid = Validate(inputElement, rule);
            if (isValid) {
              isFormValid = false;
            }
          }
        });
        if (isFormValid) {
          if (typeof options.onSubmit === "function") {
            let allElement = document.querySelectorAll(
              "input[name]:not([disabled])"
            );
  
            let formValues = Array.from(allElement).reduce((values, input) => {
              values[input.name] = input.value;
              return values;
            }, {});
            options.onSubmit(formValues);
          } else {
            formElement.submit();
          }
        } else {
          // console.log("lỗi");
        }
      };
  
      options.rules.forEach((rule) => {
        if (Array.isArray(selectorRules[rule.selector])) {
          selectorRules[rule.selector].push(rule.check);
        } else {
          selectorRules[rule.selector] = [rule.check];
        }
  
        let inputElement = document.querySelector(rule.selector);
        if (inputElement) {
          inputElement.onblur = function () {
            Validate(inputElement, rule);
          };
          inputElement.oninput = function () {
            Validate(inputElement, rule);
          };
        }
      });
    }
  }
  Validator.isRequired = function (selector, message) {
    return {
      selector: selector,
      check: function (value) {
        return value.trim() ? undefined : message;
      }
    };
  };
  
  Validator.isEmail = function (selector, message) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return {
      selector: selector,
      check: function (value) {
        return regexEmail.test(value) ? undefined : message;
      }
    };
  };
  
  Validator.isMinLength = function (selector, min, message) {
    return {
      selector: selector,
      check: function (value) {
        return value.length >= min ? undefined : message;
      }
    };
  };
  
  Validator.isConfirm = function (selector, getValueCheck, message) {
    return {
      selector: selector,
      check: function (value) {
        return value === getValueCheck() ? undefined : message;
      }
    };
  };
  
  const minLength = 6;
  Validator({
    form: "#form-1",
    errorElement: ".form-message",
    rules: [
      Validator.isRequired("#fullname", "Vui lòng điền vào mục này"),
      Validator.isRequired("#email", "Vui lòng điền vào mục này"),
      // Validator.isEmail("#email", "phải là email!"),
      Validator.isRequired("#password", "Vui lòng điền vào mục này"),
      Validator.isRequired("#password_confirmation", "Vui lòng điền vào mục này"),
      Validator.isMinLength(
        "#password",
        minLength,
        `Vui lòng nhập ít nhất ${minLength} ký tự`
      ),
      Validator.isConfirm(
        "#password_confirmation",
        function () {
          return document.querySelector("#password").value;
        },
        "Dữ liệu nhập vào không chính xác!"
      )
    ],
    onSubmit: function (data) {
      console.log(data);
    }
  });
  