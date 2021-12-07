Class Restaurant < ApplicationRecord
  has_many :foods
  has_many :line_foods, through: foods

  validates :names, :fee, :time_required, presence: true
  validates :name, length: {maximum: 30}
  validates :fee, numericality: {greater_than: 0}
end