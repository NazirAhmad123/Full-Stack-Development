<?php
	class Book{
		// Properties
		protected $price;
		protected $title;
		public static $store = 'My Store';

		public function __construct($title, $price){
			$this->title = $title;
			$this->price = $price;
			echo '<br>The class "',__CLASS__,'" was instantiated!<br>';
		}

		public function __destruct(){
			echo '<br>The class "',__CLASS__,'" was destructed!<br>';
		}

		public function __toString(){
			return $this->getTitle();
		}

		// Methods
		public function setTitle($title){
			$this->title = $title;
		}

		public function getTitle(){
			return $this->title;
		}

		public function setPrice($price){
			$this->price = price;
		}

		public function getPrice(){
			return $this->price;
		}

		public static function getStore(){
			return self::$store;
		}
	}

	class Magazine extends Book {
		public $month;
		public $year;

		// Constructor
		public function __construct($title, $price, $month, $year){
			$this->month = $month;
			$this->year = $year;

			parent::__construct($title, $price);
			echo '<br>The class "',__CLASS__,'" was instantiated!<br>';
		}

		public function getYear(){
			return $this->year;
		}
	}