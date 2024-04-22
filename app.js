// write code here
          function ucFirst(str) {
            if (!str) return str; 
            return str[0].toUpperCase() + str.slice(1);
          }
          
          let str = 'javascript';
          console.log(ucFirst(str)); 
