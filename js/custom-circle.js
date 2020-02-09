(function (w) {

    var jqPluginName = 'propeller';

    var defaults = {
        angle: 0,
        speed: 0,
        inertia: 0,
        minimalSpeed: 0.001,
        minimalAngleChange: 0.1,
        step: 0,
        stepTransitionTime: 0,
        stepTransitionEasing: 'linear',
        rotateParentInstantly: false,
        touchElement: null
    };
    let array = ["assets/img/1.png", "assets/img/2.jpg", "assets/img/3.jpg", "assets/img/4.jpg", "assets/img/4.jpg", "assets/img/5.jpg", "assets/img/6.jpg", "assets/img/7.jpg", "assets/img/8.jpg", "assets/img/9.jpg", "assets/img/10.jpg", "assets/img/11.jpg", "assets/img/12.jpg", "assets/img/13.jpg", "assets/img/14.jpg", "assets/img/15.jpg", "assets/img/16.jpg"];

    let middle_img = document.querySelector("#middle-img");

    var Propeller = function (element, options) {
        if (typeof element === 'string') {
            element = document.querySelectorAll(element);
        }

        if (element.length > 1) {
            return Propeller.createMany(element, options);
        } else if (element.length === 1) {
            element = element[0];
        }

        this.element = element;
        this.active = false;
        this.transiting = false;
        this.update = this.update.bind(this);

        this.initCSSPrefix();
        this.initAngleGetterSetter();
        this.initOptions(options);
        this.initHardwareAcceleration();
        this.initTransition();
        this.bindHandlers();
        this.addListeners();
        this.update();
        let self = this;
        let count = 0;
        setInterval(function () {
            self.update.bind(self);
            self.angle += 0.6;
            self.updateCSS(self.angle);
            console.log(self.angle)
        }, 200);


        setInterval(reload, 250)


        function reload() {
            self.angle;

            function remove_color() {
                let ele = document.querySelectorAll(".same-style-round > a")
                for (let a = 0; a < ele.length; a++) {
                    ele[a].style.color = "#BB2525"
                }
            }


            if (self.angle > 0 && self.angle < 22.5) {
                remove_color();
                middle_img.src = array[0]
                document.querySelector(".round-text1 > a").style.color = "#DCB31A ";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <h4>Online Research </h4>
                <p>* What people problems are we solving? </p>
                <p>*How do we know its Real problem?</p>
                <p>*How will we know if we have solve it?</p>
                <p class='yellow-pt-20'>“If we start with the things that we make…. We’ll ask the question, who needs to be in this room to solve this problem?… and that path- starting with the product and then building out teams you need to solve that problem, can actually be  a faster , more effective way to produce inclusive outcomes 
                Kat Holmes</p>
                

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML=` 
                
                <h2><span>Statistics</span>Online research
                <span>Anecdotes</span> Building Team 
                </h2>
                `


            } else if (self.angle > 22.5 && self.angle < 45) {
                remove_color();
                middle_img.src = array[1];
                document.querySelector(".round-text2 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=
                ` 
                <h4>Contextual Inquiries Site-visits & observation </h4>

                <p>

                “If we start with the things that we make…. We’ll ask the question, who needs to be in this room to solve this problem?… and that path- starting with the product and then building out teams you need to solve that problem, can actually be  a faster , more effective way to produce inclusive outcomes 
                Kat Holmes

                </p>
                
                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML=
                "<h2><br>Building Team<br>Anecdotes <br><span>Building Team </span> 2007</h2>"

            } else if (self.angle > 45 && self.angle < 67.5) {
                remove_color();
                middle_img.src = array[2];
                document.querySelector(".round-text3 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2008</h2>"

            } else if (self.angle > 67.5 && self.angle < 90) {
                remove_color();
                middle_img.src = array[3];
                document.querySelector(".round-text4 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2009</h2>"


            } else if (self.angle > 90 && self.angle <112.5) {
                remove_color();
                middle_img.src = array[4];
                document.querySelector(".round-text5 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2010</h2>"


            } else if (self.angle > 112.5 && self.angle < 135) {
                remove_color();
                middle_img.src = array[5];
                document.querySelector(".round-text6 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2011</h2>"

            } else if (self.angle > 135 && self.angle <157.5) {
                remove_color();
                middle_img.src = array[6];
                document.querySelector(".round-text7 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2011</h2>"


            } else if (self.angle > 157.5 && self.angle < 180) {
                remove_color();

                middle_img.src = array[7];
                document.querySelector(".round-text8 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2012</h2>"


            } else if (self.angle > 180 && self.angle < 202.5) {
                remove_color();

                middle_img.src = array[8];
                document.querySelector(".round-text9 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2013</h2>"


            } else if (self.angle > 202.5 && self.angle < 225) {
                remove_color();

                middle_img.src = array[9];
                document.querySelector(".round-text10 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2014</h2>"


            } else if (self.angle > 225 && self.angle < 247.5) {
                remove_color();

                middle_img.src = array[10];
                document.querySelector(".round-text11 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2015</h2>"


            } else if (self.angle > 247.5 && self.angle < 270) {
                remove_color();

                middle_img.src = array[11];
                document.querySelector(".round-text12 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2016</h2>"


            } else if (self.angle > 270 && self.angle < 292.5) {
                remove_color();

                middle_img.src = array[12];
                document.querySelector(".round-text13 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2017</h2>"

            } else if (self.angle > 292.5 && self.angle < 315) {
                remove_color();

                middle_img.src = array[13];
                document.querySelector(".round-text14 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2018</h2>"

            } else if (self.angle > 315 && self.angle < 337.5) {
                remove_color();

                middle_img.src = array[14];
                document.querySelector(".round-text15 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2019</h2>"


            } else if (self.angle > 337.5 && self.angle < 360) {
                remove_color();

                middle_img.src = array[15];
                document.querySelector(".round-text16 > a").style.color = "#DCB31A";
                document.querySelector(".design-process-yellow-box-top > h2").innerHTML=` 
                <p>PRIMARY  RESEARCH : OBSERVE</p>

                <p>Site-visits & observation</p>
                <p>Ethnographic fieldwork</p>
                <p>Stakeholder Interviews</p>
                <p>Surveys</p>
                <p>contextual Inquiries </p>
                <p>Thick data</p>
                <p>Deductive ( truth )</p>
                <p>Inductive ( experience)</p>
                <p>Abductive ( expanded experience)</p>

                `;
                document.querySelector(".design-process-yellow-box-bottom").innerHTML="<h2><span>Journalists of Anger</span><br>Casa Crew <br><span>Morocco</span> 2020</h2>"


            } 
            if (count > array.length - 1) {
                count = 0;
            }
        }


    };

    Propeller.createMany = function (nodes, options) {
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            result.push(new Propeller(nodes[i], options));
        }
        return result;
    };

    var p = Propeller.prototype;
    p.remove_color = function () {

    }
    p.initAngleGetterSetter = function () {
        Object.defineProperty(this, 'angle', {
            get: function () {
                return this._angle;
            },
            set: function (value) {
                this._angle = value;
                this.virtualAngle = value;
                this.updateCSS();
            }
        });
    }

    p.bindHandlers = function () {
        this.onRotationStart = this.onRotationStart.bind(this);
        this.onRotationStop = this.onRotationStop.bind(this);
        this.onRotated = this.onRotated.bind(this);
    }

    p.addListeners = function () {
        this.listenersInstalled = true;

        if ('ontouchstart' in document.documentElement) {
            this.touchElement.addEventListener('touchstart', this.onRotationStart);
            this.touchElement.addEventListener('touchmove', this.onRotated);
            this.touchElement.addEventListener('touchend', this.onRotationStop);
            this.touchElement.addEventListener('touchcancel', this.onRotationStop);
            this.touchElement.addEventListener('dragstart', this.returnFalse);
        } else {
            this.touchElement.addEventListener('mousedown', this.onRotationStart);
            this.touchElement.addEventListener('mousemove', this.onRotated);
            this.touchElement.addEventListener('mouseup', this.onRotationStop);
            this.touchElement.addEventListener('mouseleave', this.onRotationStop);
            this.touchElement.addEventListener('dragstart', this.returnFalse);
        }

        this.touchElement.ondragstart = this.returnFalse;
    }

    p.removeListeners = function () {
        this.listenersInstalled = false;

        if ('ontouchstart' in document.documentElement) {
            this.touchElement.removeEventListener('touchstart', this.onRotationStart);
            this.touchElement.removeEventListener('touchmove', this.onRotated);
            this.touchElement.removeEventListener('touchend', this.onRotationStop);
            this.touchElement.removeEventListener('touchcancel', this.onRotationStop);
            this.touchElement.removeEventListener('dragstart', this.returnFalse);
        } else {
            this.touchElement.removeEventListener('mousedown', this.onRotationStart);
            this.touchElement.removeEventListener('mousemove', this.onRotated);
            this.touchElement.removeEventListener('mouseup', this.onRotationStop);
            this.touchElement.removeEventListener('mouseleave', this.onRotationStop);
            this.touchElement.removeEventListener('dragstart', this.returnFalse);
        }
    }

    p.bind = function () {
        if (this.listenersInstalled !== true) {
            this.addListeners();
        }
    }

    p.unbind = function () {
        if (this.listenersInstalled === true) {
            this.removeListeners();
            this.onRotationStop();
        }
    }

    p.stop = function () {
        this.speed = 0;
        this.onRotationStop();
    }

    p.onRotationStart = function (event) {
        //Initializes coordinates if object was moved
        this.initCoordinates();
        this.initDrag();
        this.active = true;

        //Execute onDragStart callback if stopped
        if (this.onDragStart !== undefined) {
            this.onDragStart();
        }

        if (this.rotateParentInstantly === false) {
            event.stopPropagation();
        }
    }

    p.onRotationStop = function () {
        //Execute onDragStop callback if stopped
        if (this.onDragStop !== undefined && this.active === true) {
            this.onDragStop();
        }

        this.active = false;
    }

    p.onRotated = function (event) {
        if (this.active === true) {
            event.stopPropagation();
            event.preventDefault();

            if (event.targetTouches !== undefined && event.targetTouches[0] !== undefined) {
                this.lastMouseEvent = {
                    pageX: event.targetTouches[0].pageX,
                    pageY: event.targetTouches[0].pageY
                }
            } else {
                this.lastMouseEvent = {
                    pageX: event.pageX || event.clientX,
                    pageY: event.pageY || event.clientY
                }
            }
        }
    }

    p.update = function () {
        //Calculating angle on requestAnimationFrame only for optimisation purposes
        if (this.lastMouseEvent !== undefined && this.active === true) {
            this.updateAngleToMouse(this.lastMouseEvent);
        }

        this.updateAngle();
        this.applySpeed();
        this.applyInertia();

        if (Math.abs(this.lastAppliedAngle - this._angle) >= this.minimalAngleChange && this.transiting === false) {
            this.updateCSS();

            //Prevents new transition before old is completed
            this.blockTransition();

            if (this.onRotate !== undefined && typeof this.onRotate === 'function') {
                this.onRotate.bind(this)();
            }

            this.lastAppliedAngle = this._angle;

        }

        window.requestAnimFrame(this.update);
    }

    p.updateAngle = function () {
        if (this.step > 0) {
            this._angle = this.getAngleFromVirtual();
        } else {
            this._angle = this.normalizeAngle(this.virtualAngle);
        }
    }

    p.getAngleFromVirtual = function () {
        return Math.ceil(this.virtualAngle / this.step) * this.step;
    }

    p.normalizeAngle = function (angle) {
        var result = angle;
        result = result % 360;
        if (result < 0) {
            result = 360 + result;
        }
        return result;
    }

    p.differenceBetweenAngles = function (newAngle, oldAngle) {
        var a1 = newAngle * (Math.PI / 180);
        var a2 = oldAngle * (Math.PI / 180);
        var radians = Math.atan2(Math.sin(a1 - a2), Math.cos(a1 - a2));
        var degrees = radians * (180 / Math.PI);
        return Math.round(degrees * 100) / 100;
    }

    p.applySpeed = function () {
        if (this.inertia > 0 && this.speed !== 0 && this.active === false) {
            this.virtualAngle += this.speed;
        }
    }

    p.applyInertia = function () {
        if (this.inertia > 0) {
            if (Math.abs(this.speed) >= this.minimalSpeed) {
                this.speed = this.speed * this.inertia;

                //Execute onStop callback if stopped
                if (this.active === false && Math.abs(this.speed) < this.minimalSpeed) {
                    if (this.onStop !== undefined) {
                        this.onStop();
                    }
                }
            } else if (this.speed !== 0) {
                this.speed = 0;
            }
        }
    }

    p.updateAngleToMouse = function (event) {
        var xDiff = event.pageX - this.cx;
        var yDiff = event.pageY - this.cy;

        var mouseRadians = Math.atan2(xDiff, yDiff);
        var mouseDegrees = mouseRadians * (180 / Math.PI * -1) + 180;

        if (this.lastMouseAngle === undefined) {
            this.lastElementAngle = this.virtualAngle;
            this.lastMouseAngle = mouseDegrees;
        }

        //At this moment we have to use specific algorithm when CSS transition is enabled. Using same approach when transition is disabled lead to worse precision.
        //TODO Develop universal algorithm to support transitions and provide high precision at once
        if (this.stepTransitionTime !== defaults.stepTransitionTime) {
            this.speed = this.mouseDiff = this.differenceBetweenAngles(mouseDegrees, this.lastMouseAngle);
            this.virtualAngle = this.lastElementAngle + this.mouseDiff;
            this.lastElementAngle = this.virtualAngle;
            this.lastMouseAngle = mouseDegrees;
        } else {
            var oldAngle = this.virtualAngle;
            this.mouseDiff = mouseDegrees - this.lastMouseAngle;
            this.virtualAngle = this.lastElementAngle + this.mouseDiff;
            var newAngle = this.virtualAngle;
            this.speed = this.differenceBetweenAngles(newAngle, oldAngle);
        }
    }

    p.initCoordinates = function () {
        var elementOffset = this.getViewOffset();
        this.cx = elementOffset.x + (this.element.offsetWidth / 2);
        this.cy = elementOffset.y + (this.element.offsetHeight / 2);
    }

    p.initDrag = function () {
        this.speed = 0;
        this.lastMouseAngle = undefined;
        this.lastElementAngle = undefined;
        this.lastMouseEvent = undefined;
    }

    p.initOptions = function (options) {
        options = options || defaults;

        this.touchElement = document.querySelectorAll(options.touchElement)[0] || this.element;

        this.onRotate = options.onRotate || options.onrotate;
        this.onStop = options.onStop || options.onstop;
        this.onDragStop = options.onDragStop || options.ondragstop;
        this.onDragStart = options.onDragStart || options.ondragstart;

        this.step = options.step || defaults.step;
        this.stepTransitionTime = options.stepTransitionTime || defaults.stepTransitionTime;
        this.stepTransitionEasing = options.stepTransitionEasing || defaults.stepTransitionEasing;

        this.angle = options.angle || defaults.angle;
        this.speed = options.speed || defaults.speed;
        this.inertia = options.inertia || defaults.inertia;
        this.minimalSpeed = options.minimalSpeed || defaults.minimalSpeed;
        this.lastAppliedAngle = this.virtualAngle = this._angle = options.angle || defaults.angle;
        this.minimalAngleChange = this.step !== defaults.step ? this.step : defaults.minimalAngleChange;
        this.rotateParentInstantly = options.rotateParentInstantly || defaults.rotateParentInstantly;
    }

    p.initCSSPrefix = function () {
        if (Propeller.cssPrefix === undefined) {
            if (typeof (document.body.style.transform) != 'undefined') {
                Propeller.cssPrefix = '';
            } else if (typeof (document.body.style.mozTransform) != 'undefined') {
                Propeller.cssPrefix = '-moz-';
            } else if (typeof (document.body.style.webkitTransform) != 'undefined') {
                Propeller.cssPrefix = '-webkit-';
            } else if (typeof (document.body.style.msTransform) != 'undefined') {
                Propeller.cssPrefix = '-ms-';
            }
        }
    }

    p.initHardwareAcceleration = function () {
        this.accelerationPostfix = '';

        //Check for CSS3d support
        var el = document.createElement('p'),
        has3d,
        transforms = {
            'webkitTransform': '-webkit-transform',
            'OTransform': '-o-transform',
            'msTransform': '-ms-transform',
            'MozTransform': '-moz-transform',
            'transform': 'transform'
        };

        document.body.insertBefore(el, null);

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = "translate3d(1px,1px,1px)";
                has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        var supported = (has3d !== undefined && has3d.length > 0 && has3d !== "none");

        //If CSS3d is supported then ann translateZ hack to enable GPU acceleration on layer
        if (supported === true) {
            this.accelerationPostfix = 'translateZ(0)';
            this.element.style[Propeller.cssPrefix + 'transform'] = this.accelerationPostfix;
            this.updateCSS();
        }
    }

    p.initTransition = function () {
        if (this.stepTransitionTime !== defaults.stepTransitionTime) {
            var prop = 'all ' + this.stepTransitionTime + 'ms ' + this.stepTransitionEasing;
            this.element.style[Propeller.cssPrefix + 'transition'] = prop;
        }
    }

    p.updateCSS = function (a) {

        // setInterval(function(){
        //     a +=20;
        //     if(a>360){
        //         a=0;
        //     }
        // },100)
        this.element.style[Propeller.cssPrefix + 'transform'] = 'rotate(' + a + 'deg) ' + this.accelerationPostfix;



    }


    p.blockTransition = function () {
        if (this.stepTransitionTime !== defaults.stepTransitionTime) {
            var self = this;
            setTimeout(function () {
                self.transiting = false;
            }, this.stepTransitionTime);
            this.transiting = true;
        }
    }

    //Calculating pageX, pageY for elements with offset parents
    p.getViewOffset = function (singleFrame) {
        var coords = {
            x: 0,
            y: 0
        };

        if (this.element)
            this.addOffset(this.element, coords, 'defaultView' in document ? document.defaultView : document.parentWindow);

        return coords;
    }

    p.addOffset = function (node, coords, view) {
        var p = node.offsetParent;
        coords.x += node.offsetLeft - (p ? p.scrollLeft : 0);
        coords.y += node.offsetTop - (p ? p.scrollTop : 0);

        if (p) {
            if (p.nodeType == 1) {
                var parentStyle = view.getComputedStyle(p, '');
                if (parentStyle.position != 'static') {
                    coords.x += parseInt(parentStyle.borderLeftWidth);
                    coords.y += parseInt(parentStyle.borderTopWidth);

                    if (p.localName.toLowerCase() == 'table') {
                        coords.x += parseInt(parentStyle.paddingLeft);
                        coords.y += parseInt(parentStyle.paddingTop);
                    } else if (p.localName.toLowerCase() == 'body') {
                        var style = view.getComputedStyle(node, '');
                        coords.x += parseInt(style.marginLeft);
                        coords.y += parseInt(style.marginTop);
                    }
                } else if (p.localName.toLowerCase() == 'body') {
                    coords.x += parseInt(parentStyle.borderLeftWidth);
                    coords.y += parseInt(parentStyle.borderTopWidth);
                }

                var parent = node.parentNode;
                while (p != parent) {
                    coords.x -= parent.scrollLeft;
                    coords.y -= parent.scrollTop;
                    parent = parent.parentNode;
                }
                this.addOffset(p, coords, view);
            }
        } else {
            if (node.localName.toLowerCase() == 'body') {
                var style = view.getComputedStyle(node, '');
                coords.x += parseInt(style.borderLeftWidth);
                coords.y += parseInt(style.borderTopWidth);

                var htmlStyle = view.getComputedStyle(node.parentNode, '');
                coords.x += parseInt(htmlStyle.paddingLeft);
                coords.y += parseInt(htmlStyle.paddingTop);
                coords.x += parseInt(htmlStyle.marginLeft);
                coords.y += parseInt(htmlStyle.marginTop);
            }

            if (node.scrollLeft)
                coords.x += node.scrollLeft;
            if (node.scrollTop)
                coords.y += node.scrollTop;

            var win = node.ownerDocument.defaultView;
            if (win && (win.frameElement))
                this.addOffset(win.frameElement, coords, win);
        }
    }

    p.returnFalse = function () {
        return false;
    }



    //Wrap to jQuery plugin
    if (w.$ !== undefined) {
        $.propeller = {};
        $.propeller.propellers = [];

        $.fn[jqPluginName] = function (options) {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + jqPluginName)) {
                    var propellerObj = new Propeller(this, options);
                    $.data(this, 'plugin_' + jqPluginName, propellerObj);
                    $.propeller.propellers.push(propellerObj);
                }
            });
        };
    }

    Propeller.deg2radians = Math.PI * 2 / 360;

    w.Propeller = Propeller;


})(window);



//RequestAnimatedFrame polyfill
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

var width = 450,
height = 450,
margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin;

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Create dummy data
var topLevelFilters = {
    'Size': '1',
    'Color': '2',
    'Pattern': '3',
    'Material': '4',
    'Price': '5',
    'Brand': '6',
    'Fit': '7',
    'Features': '8'
};
var slices = 8,
sliceSize = Object.keys(topLevelFilters).length / 8;

// set the color scale
// var color = d3.scaleOrdinal()
//     .domain(data);

// Compute the position of each group on the pie:
var pie = d3.pie()
.value(sliceSize)
var data_ready = pie(d3.entries(topLevelFilters))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
.selectAll('whatever')
.data(data_ready)
.enter()
.append('path')
.attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
    )
.attr('fill', '#3e3e4d')
.attr("stroke", "#373746")
.attr("cursor", "pointer")
.style("stroke-width", "1px")
.text(function (d) {
    return 'Label';
})
.on("click", (e, index, nodes) => {
    console.log('User clicked on', nodes[index]);
    console.log('Data', e.data);
})
.on("mouseover", (e, index, nodes) => {
        // console.log(nodes[index]);
        d3.select(nodes[index]).attr('opacity', '0.9');
        // console.log('User mouseover on', e.data);
    })
.on("mouseleave", (e, index, nodes) => {
        // console.log(nodes[index]);
        d3.select(nodes[index]).attr('opacity', '1');
        // console.log('User mouseout from', e.data);
    });

// shape helper to build arcs:
var arcGenerator = d3.arc()
.innerRadius(0)
.outerRadius(radius)

// Updated Angle Calculation Function...
function angle(d, offset, threshold) {
    var a = (d.startAngle + d.endAngle) * 90 / Math.PI + offset;
    // return a > threshold ? a - 180 : a;
    return a;
}

svg.selectAll('whatever')
.data(data_ready)
.enter()
.append('text')
.text(function (d) {
    return d.data.key
})
    // .attr("transform", function(d) { //set text'ss origin to the centroid
    //     //we have to make sure to set these before calling arc.centroid
    //     d.innerRadius = (width/8); // Set Inner Coordinate
    //     d.outerRadius = (width/4); // Set Outer Coordinate
    //     // return "translate(" + arc2.centroid(d) + ")rotate(" + angle(d, -90, 90) + ")";
    // })
    .attr("transform", function (d) {
        d.innerRadius = (width / 8); // Set Inner Coordinate
        d.outerRadius = (width / 4); // Set Outer Coordinate
        return "translate(" + arcGenerator.centroid(d) + ") rotate(" + angle(d, -90, 90) + ")";
    })
    .style("text-anchor", "start")
    .style("font-family", "Arial")
    .style("fill", "#fff")
    .style("font-size", 17)
    .style("pointer-events", "none")
    .style("opacity", "0.8")

    let chck = new Propeller('.circle', {
        inertia: 0.89
    });
// console.log(chck.updateCSS())


// console.log(chck.updateCSS())

document.querySelector(".got-button").addEventListener("click",function(){
    document.querySelector(".main-wrapper-overly").style.display="none"
})
