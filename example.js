function range(stop, start, step) {
	switch (true) {
      case(step >= stop):
            return;
      case(typeof stop !== 'undefined' && typeof start === 'undefined' && typeof step === 'undefined'):
			start = 0;
          	step = 1;
       		break;
      case(typeof start !== 'undefined' && typeof stop !== 'undefined' && typeof step === 'undefined'):
          step = 1;
          break;
      case(typeof stop === 'undefined'):
          throw TypeError("expected range(stop), range(start, stop), or range(start, stop, step)");
          break;
      default:
          break;
    }
    console.log(step);
    step++;
    range(stop, start, step);
}

range(5, 0, 1);
