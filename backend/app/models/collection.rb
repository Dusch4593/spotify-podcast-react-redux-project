class Collection < ApplicationRecord
  has_many :podcasts, dependent: :destroy
end
