class Link < ApplicationRecord
    validates :actual_url, :lookup_code, presence: true

    def self.fetch_url(code)
        link = find_by(lookup_code: code)
        link.update(clicks: (link.clicks.to_i + 1))

        link.actual_url
    end
end
